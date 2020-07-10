const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const ThoughtSchema = new Schema (
    {

    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;