import mongoose from 'mongoose'
 
const {Schema} = mongoose

const personSchema = new Schema({
    name : {
        type: String,
        required: true
    }
}, {timestamps: true})

const Person = mongoose.model('Person', personSchema)
export default Person