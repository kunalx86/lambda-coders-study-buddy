from flask import Flask,render_template,url_for,request, jsonify
from flask_cors import CORS
import pandas as pd 
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib


app = Flask(__name__)
CORS(app, origins="*", supports_credentials=False)

@app.route('/predict',methods=['POST'])
def predict():
  df= pd.read_csv("spam.csv", encoding="latin-1")
  df.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis=1, inplace=True)
  X = df['message']
  y = df['label']
	
	# Extract Feature With CountVectorizer
  cv = CountVectorizer()
  X = cv.fit_transform(X) # Fit the Data
  from sklearn.model_selection import train_test_split
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
	#Naive Bayes Classifier
  from sklearn.naive_bayes import MultinomialNB

  clf = MultinomialNB()
  clf.fit(X_train,y_train)
  clf.score(X_test,y_test)
	#Alternative Usage of Saved Model
	# joblib.dump(clf, 'NB_spam_model.pkl')
	# NB_spam_model = open('NB_spam_model.pkl','rb')
	# clf = joblib.load(NB_spam_model)

  my_prediction = {}
  if request.method == 'POST':
    print(request.form)
    message = request.get_json()['review']
    data = [message]
    vect = cv.transform(data).toarray()
    my_prediction = clf.predict(vect).tolist()
  print(my_prediction)
  return jsonify(my_prediction)



if __name__ == '__main__':
	app.run(debug=True, port=5500)