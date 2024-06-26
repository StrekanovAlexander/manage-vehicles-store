import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: Number,
    name: String,
    image:  { type: String, default: 'N/A' },
    activity: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

mongoose.model('brands', Schema);