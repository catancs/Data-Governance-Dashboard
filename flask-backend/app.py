from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/data')
def get_data():
    data = {"metrics": [{"name": "Compliance Rate", "value": 98}, {"name": "Data Quality Score", "value": 95}]}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
