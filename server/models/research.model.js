import mongoose from 'mongoose';

const ResearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  shortIntro: { type: String, required: true },
  link: { type: String, required: true }
});

const Research = mongoose.model('Research', ResearchSchema);
export default Research;