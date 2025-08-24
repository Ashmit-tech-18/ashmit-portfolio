import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import models
import Skill from './models/skill.model.js';
import Education from './models/education.model.js';
import Project from './models/project.model.js';
import Certificate from './models/certificate.model.js';
import Blog from './models/blog.model.js';
import Research from './models/research.model.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    // Clear existing data
    await Skill.deleteMany();
    await Education.deleteMany();
    await Project.deleteMany();
    await Certificate.deleteMany();
    await Blog.deleteMany();
    await Research.deleteMany();

    console.log('Old data cleared.');

    // Insert new data
    await Skill.insertMany(data.skills);
    await Education.insertMany(data.education);
    await Project.insertMany(data.projects);
    await Certificate.insertMany(data.certificates);
    await Blog.insertMany(data.blogs);
    await Research.insertMany(data.research);

    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
    await connectDB();
    await importData();
};

seedDatabase();