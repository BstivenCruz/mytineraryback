import mongoose from 'mongoose'


const schema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
        code: { type: String, required: true },
        verified:{ type: Boolean, required: true },
        logged:{ type: Boolean, required: true }

    },{timestamps:true}
)

export const User = mongoose.model('users',schema)