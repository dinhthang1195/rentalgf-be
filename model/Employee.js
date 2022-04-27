const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bloodtype: {
    type: String,
    // required: true,
  },
  height: {
    type: String,
    // required: true,
  },
  birthplace: {
    type: String,
    // required: true,
  },
  profession: {
    type: String,
    // required: true,
  },
  style: {
    type: String,
    // required: true,
  },
  personality: {
    type: String,
    // required: true,
  },
  sake: {
    type: String,
    // required: true,
  },
  tobacco: {
    type: String,
    // required: true,
  },
  intro: {
    type: String,
    // required: true,
  },
  rank: {
    type: String,
    // required: true,
  },
  manager: {
    type: String,
    // required: true,
  },
  lineid: {
    type: String,
    // required: true,
  },
  imgPath1: {
    type: String,
    required: true,
  },
  imgPath2: {
    type: String,
    // required: true,
  },
  imgPath3: {
    type: String,
    // required: true,
  },
  imgPath4: {
    type: String,
    // required: true,
  },
  imgPath5: {
    type: String,
    // required: true,
  },
  imgPath6: {
    type: String,
    // required: true,
  },
  imgPath7: {
    type: String,
    // required: true,
  },
  imgPath8: {
    type: String,
    // required: true,
  },
  landingImg: {
    type: String,
    required: true,
  },
  timetable: [
    {
      customer: { type: String },
      start: { type: String },
      end: { type: String },
    },
  ],
});

module.exports = mongoose.model('Employee', employeeSchema);
