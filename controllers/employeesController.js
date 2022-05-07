const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees) return res.status(204).json({ message: 'No employees found.' });
  res.json(employees);
};

const createNewEmployee = async (req, res) => {
  if (!req?.body?.name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  try {
    const result = await Employee.create({
      name: req.body.name,
      bloodtype: req.body.bloodtype,
      height: req.body.height,
      birthplace: req.body.birthplace,
      profession: req.body.profession,
      style: req.body.style,
      personality: req.body.personality,
      sake: req.body.sake,
      tobacco: req.body.tobacco,
      intro: req.body.intro,
      rank: req.body.rank,
      manager: req.body.manager,
      lineid: req.body.lineid,
      imgPath1: req.body.imgPath1,
      imgPath2: req.body.imgPath2,
      imgPath3: req.body.imgPath3,
      imgPath4: req.body.imgPath4,
      imgPath5: req.body.imgPath5,
      imgPath6: req.body.imgPath6,
      imgPath7: req.body.imgPath7,
      imgPath8: req.body.imgPath8,
      imgPath8: req.body.imgPath8,
      landingImg: req.body.landingImg,
      timetable: req.body.timetable,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateEmployee = async (req, res) => {
  console.log('Request: ', req.body);
  if (!req?.body?.id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res.status(204).json({ message: `No employee matches ID ${req.body.id}.` });
  }
  if (req.body?.name) employee.name = req.body.name;
  if (req.body?.bloodtype) employee.bloodtype = req.body.bloodtype;
  if (req.body?.height) employee.height = req.body.height;
  if (req.body?.birthplace) employee.birthplace = req.body.birthplace;
  if (req.body?.profession) employee.profession = req.body.profession;
  if (req.body?.style) employee.style = req.body.style;
  if (req.body?.personality) employee.personality = req.body.personality;
  if (req.body?.sake) employee.sake = req.body.sake;
  if (req.body?.tobacco) employee.tobacco = req.body.tobacco;
  if (req.body?.intro) employee.intro = req.body.intro;
  if (req.body?.rank) employee.rank = req.body.rank;
  if (req.body?.manager) employee.manager = req.body.manager;
  if (req.body?.lineid) employee.lineid = req.body.lineid;
  if (req.body?.imgPath1) employee.imgPath1 = req.body.imgPath1;
  if (req.body?.imgPath2) employee.imgPath2 = req.body.imgPath2;
  if (req.body?.imgPath3) employee.imgPath3 = req.body.imgPath3;
  if (req.body?.imgPath4) employee.imgPath4 = req.body.imgPath4;
  if (req.body?.imgPath5) employee.imgPath5 = req.body.imgPath5;
  if (req.body?.imgPath6) employee.imgPath6 = req.body.imgPath6;
  if (req.body?.imgPath7) employee.imgPath7 = req.body.imgPath7;
  if (req.body?.imgPath8) employee.imgPath8 = req.body.imgPath8;
  if (req.body?.landingImg) employee.landingImg = req.body.landingImg;
  if (req.body?.timetable) employee.timetable = req.body.timetable;

  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  console.log('Request: ', req.params);
  if (!req?.params?.id) return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.params.id }).exec();
  if (!employee) {
    return res.status(204).json({ message: `No employee matches ID ${req.params.id}.` });
  }
  const result = await employee.deleteOne({ _id: req.params.id });
  res.json(result);
};

const getEmployee = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.params.id }).exec();
  if (!employee) {
    return res.status(204).json({ message: `No employee matches ID ${req.params.id}.` });
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
