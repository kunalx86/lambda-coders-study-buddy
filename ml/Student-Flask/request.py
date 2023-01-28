import requests

url = 'http://localhost:5000/predict_api'
r = requests.post(url,json={88,99,100,287,0,0,0,1,0,0,1,0,0,0,1,0})

print(r.json())