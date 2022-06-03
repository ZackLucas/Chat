import { v4 } from 'uuid';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    userId: { type: String, default: v4(), unique: true, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String },
    age: { type: Number },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
    collection: 'User',
  },
);

export const UserSchema = mongoose.model('User', userSchema);
