import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    activity: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

mongoose.model('users', Schema);