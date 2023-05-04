import mongoose from 'mongoose';

const userSchemaObject = {
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 5,
  },
  picturePath: {
    type: String,
    default: '',
  },
  friends: {
    type: Array,
    default: [],
  },
  location: String,
  occupation: String,
  viewedProfile: String,
  impressions: Number,
};

const UserSchema = new mongoose.Schema(userSchemaObject, { timestampes: true });

const User = mongoose.model('User', UserSchema);

export default User;
