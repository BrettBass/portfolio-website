from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
import models

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests for all routes

# Configuring the database path'
database_file = os.path.abspath(os.path.join(os.path.dirname(__file__), 'data', 'portfolio_website.db'))
print(os.getcwd())
print(database_file)
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{database_file}'
db = SQLAlchemy(app)

# create the database tables based on the defined models
with app.app_context():
    db.create_all()
    
@app.route('/api/contact', methods=['POST'])
def store_contact():
    try:
        data = request.json
        contact = models.Contact.from_json(data)
        db.session.add(contact)
        db.session.commit()
        return {'message': 'Contact information saved successfully'}
    except ValueError as e:
        return {'message', str(e)}, 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)