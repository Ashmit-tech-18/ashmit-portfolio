import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  subjects: { type: [String], required: true },
  year: { type: String, required: true },
  grade: { type: String, required: true }
});

const Education = mongoose.model('Education', EducationSchema);
export default Education;