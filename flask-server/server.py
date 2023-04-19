from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

messages = []

@app.route("/members")
@cross_origin(supports_credentials=True)
def members():
    return jsonify({"members": messages})

@app.route('/save-data', methods=['POST'])
@cross_origin(supports_credentials=True)
def save_data():
    global messages
    data = request.json
    print('Data received:', data)
    messages = data['messages']
    return jsonify({'message': 'Data saved successfully'})


if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000, debug=True)


    