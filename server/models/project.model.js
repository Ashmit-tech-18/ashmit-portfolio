import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  detailedDescription: { type: String, required: true },
  keyFeatures: { type: [String], required: true },
  techStack: { type: [String], required: true },
  images: { type: String, required: true },
  githubLink: { type: String, required: true },
  liveDemoLink: { type: String }
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;