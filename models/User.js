const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {

    }
);


//create the Pizza model using PizzaSchema 
const User = model('User', UserSchema);

//export the Pizza model
module.exports = User;