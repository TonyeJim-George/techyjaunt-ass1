const Student = require('../models/student.schema');


exports.createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, age } = req.body;
    if (!firstName || !lastName || !email || !age) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailExists = await Student.findOne({ email });
    if (emailExists) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const student = await Student.create({ firstName, lastName, email, age });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, lastName } = req.query;
    const query = lastName ? { lastName } : {};

    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Deleted successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getStudentCount = async (req, res) => {
  try {
    const count = await Student.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
