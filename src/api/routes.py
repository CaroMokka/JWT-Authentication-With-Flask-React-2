"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Este funciona perfecto con el cliente (postman) y (app-front)
@api.route('/registro', methods=['POST']) 
def add_user():
    request_body = request.get_json()
    name = request_body["name"]
    email = request_body["email"]
    password = request_body["password"]
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg":"Usuario ya existe"}), 444
    else:
        new_user = User(name=name,email=email,password=password,is_active=True)
        db.session.add(new_user)
        db.session.commit()
        print(new_user)
        return jsonify({"msg":"Usuario registrado exitosamente"}), 200
   
   