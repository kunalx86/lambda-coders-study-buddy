import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import pandas as pd
import math
import json

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
CORS(app, origins="*", supports_credentials=False)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array([88,99,100])]
    prediction = model.predict(final_features)
    '''
    # math_score = request.form.get("math")
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]   
    
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)
    
    return render_template('index.html', prediction_text='Predicted Percentage is {}'.format(output))

@app.route('/predict_api',methods=['POST'])
def predict_api():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])
    output = prediction[0]
    return jsonify(output)

@app.route('/csv', methods=["POST"])
def upload_predict():
  file = request.files["file"]
  file.save(f"{file.filename}.csv")
  data = pd.read_csv(f"{file.filename}.csv") 
  data_ = data
  drop_list = ['roll no', 'name', 'standard', 'gender', 'race/ethnicity',
       'parental level of education', 'lunch', 'test preparation course',
       'math', 'english', 'geography', 'history', 'science', 'total',
       'percentag', 'attended', 'total lectures', 'test marks',
       'total marks', 'score-cat', 'study-cat',
       'Unnamed: 24']
  data = data.drop(drop_list,axis=1)
  from sklearn.model_selection import train_test_split
  x=data.drop(['cluster'], axis=1, inplace=False)
  y=data["cluster"]
  x=pd.get_dummies(x, drop_first=True)
  x_train,x_test,y_train,y_test = train_test_split(x, y, test_size=0.33, random_state=101)
  from sklearn.linear_model import LinearRegression
  from sklearn.ensemble import RandomForestClassifier
  rf = RandomForestClassifier(n_estimators=10, criterion='entropy', random_state=0)
  rf = rf.fit(x_train,y_train)
  predictions = rf.predict(x_test)
  data.drop(['cluster'], axis=1, inplace=True)
  data_ = list(data_[["roll no"]].iterrows())
  # output = list(map(lambda x: 4 if x not in [1, 2, 3] else x, map(lambda x: math.ceil(cluster_model.predict(x)), data.iterrows())))
  output = zip(data_, list(map(lambda x: 4 if x not in [1, 2, 3] else x, map(math.ceil, rf.predict(data)))))
  ret = []
  for x, y in output:
    ret.append({
      "roll": x[0],
      "cluster": y,
      "weak-subject": ""
    })
  
  for entry in output:
    if entry["cluster"] in [2, 3]:
      df = entry[['math', 'english', 'geography', 'history', 'science']]
      for val in df:
        if((df[val][4]-(abs(df[val].mean())))>25):
          entry["weak-subject"] = val
          print(val)
  
  return jsonify(ret)

if __name__ == "__main__":
    app.run(debug=True, port=5600)