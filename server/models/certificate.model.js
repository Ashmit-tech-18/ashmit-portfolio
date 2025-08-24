import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String }
});

const Certificate = mongoose.model('Certificate', CertificateSchema);
export default Certificate;