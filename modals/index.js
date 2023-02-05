import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const InsertUser = new Schema({
    name: { type: String, require: true, trim: true },
    phone: { type: Number, require: true },
    age: { type: Number, require: true, min: 18, max: 60 },
})

const UserModal = mongoose.model("user", InsertUser)

export default UserModal
