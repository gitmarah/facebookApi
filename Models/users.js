import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

export default mongoose.model('Users', userSchema);