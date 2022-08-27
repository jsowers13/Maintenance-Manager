from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

user_workorder = db.Table('user_workorder',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('workorder_id', db.Integer, db.ForeignKey('workorder.id'))
)

user_property = db.Table('user_property',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('property_id', db.Integer, db.ForeignKey('property.id'))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_system_admin = db.Column(db.Boolean, default=False, nullable=True)
    is_property_admin = db.Column(db.Boolean, default=False, nullable=True)
    work_orders = db.relationship('Workorder', secondary=user_workorder, backref='users')
    properties = db.relationship('Property', secondary=user_property, backref='users')
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_system_admin": self.is_system_admin,
            "is_property_admin": self.is_property_admin,
            "properties": self.properties
            # do not serialize the password, its a security breach
        }

class Workorder(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    access_notes = db.Column(db.String(100), unique=False, nullable=True)
    entry_allowed = db.Column(db.Boolean, default=True, nullable=False)
    bill_to_customer = db.Column(db.Boolean, default=False, nullable=False)
    maintenance_notes = db.Column(db.String(1000), unique=False, nullable=True)
    status = db.Column(db.String(250), unique=False, nullable=False)

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "access_notes": self.access_notes,
            "entry_allowed": self.entry_allowed,
            "bill_to_customer": self.bill_to_customer,
            "maintenance_notes": self.maintenance_notes,
            "status": self.status
        }

class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    address = db.Column(db.String(1000), unique=True, nullable=True)
    phone_number = db.Column(db.String(25), unique=True, nullable=True)
    
