const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bloodtype: {
    type: String,
  },
  height: {
    type: String,
  },
  birthplace: {
    type: String,
  },
  profession: {
    type: String,
  },
  style: {
    type: String,
  },
  personality: {
    type: String,
  },
  sake: {
    type: String,
  },
  tobacco: {
    type: String,
  },
  intro: {
    type: String,
  },
  rank: {
    type: String,
  },
  manager: {
    type: String,
  },
  lineid: {
    type: String,
  },
  imgPath1: {
    type: String,
  },
  imgPath2: {
    type: String,
  },
  imgPath3: {
    type: String,
  },
  imgPath4: {
    type: String,
  },
  imgPath5: {
    type: String,
  },
  imgPath6: {
    type: String,
  },
  imgPath7: {
    type: String,
  },
  imgPath8: {
    type: String,
  },
  landingImg: {
    type: String,
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
