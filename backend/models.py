import app

class Contact(app.db.Model):
    id = app.db.Column(app.db.Integer, primary_key=True)
    name = app.db.Column(app.db.String(100), nullable=False)
    email = app.db.Column(app.db.String(100), nullable=False)
    subject = app.db.Column(app.db.String(100), nullable=False)
    message = app.db.Column(app.db.String(100), nullable=False)

    def __repr__(self):
        return f"<Contact {self.name}>"

    @classmethod
    def from_json(cls, data):
        if not data or not all(key in data for key in ['name', 'email', 'subject', 'message']):
            raise ValueError('Invalid data')
        return cls(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])