const { Schema, model } = require('mongoose');
const moment = require('moment');



//create the Pizza model using PizzaSchema 
const User = model('User', UserSchema);

//export the Pizza model
module.exports = User;