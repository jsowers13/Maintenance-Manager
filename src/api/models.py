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

class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), unique=True, nullable=False)
    locations = db.relationship('Location', backref='property')
    workOrders = db.relationship('WorkOrder', backref='property')

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "phone_number": self.phone_number,
            
        }

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'))
    workOrders = db.relationship('WorkOrder', backref='location')

class WorkOrder(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    trade = db.Column(db.String(120), unique=False, nullable=True)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'))
    location_id = db.Column(db.Integer, db.ForeignKey('location.id'))
