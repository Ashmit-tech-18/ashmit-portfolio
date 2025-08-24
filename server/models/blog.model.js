import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  shortIntro: { type: String, required: true },
  fullContent: { type: String, required: true }
});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;