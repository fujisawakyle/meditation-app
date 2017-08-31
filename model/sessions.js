//model/sessions.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var SessionSchema = new Schema({
  journal: {
    type: String
  }
});



//model based on SessionSchema
const Session = mongoose.model('session', SessionSchema);

//export our module to use in server.js
module.exports = Session;
