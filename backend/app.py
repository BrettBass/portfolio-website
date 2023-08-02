from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests for all routes

@app.route('/api/contact', methods=['POST'])
def store_contact():
    data = request.json
    if data:
        with open('contacts.txt', 'a') as f:
            f.write(f"Name: {data.get('name', '')}\n")
            f.write(f"Email: {data.get('email', '')}\n")
            f.write(f"Subject: {data.get('subject', '')}\n")
            f.write(f"Message: {data.get('message', '')}\n")
            f.write("=" * 30 + "\n")
        return {'message': 'Contact information saved successfully'}
    else:
        return {'message': 'Invalid data'}, 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)