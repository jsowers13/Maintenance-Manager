from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class WorkOrder(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    access_notes = db.Column(db.String(100), unique=False, nullable=True)
    entry_allowed = db.Column(db.Boolean, default=True, nullable=False)
    bill_to_customer = db.Column(db.Boolean, default=False, nullable=False)
    maintenance_notes = db.Column(db.String(1000), unique=False, nullable=True)
    status = db.Column(db.String(250), unique=False, nullable=False)
    
