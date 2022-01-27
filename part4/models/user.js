const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    name: { type: String, unique: true, required: true },
    passwordHash: String,

})
userSchema.plugin(uniqueV)

userSchema.set('toJSON', {
    transform: (doc, retObj) => {
        retObj.id = retObj._id.toString()
        delete retObj._id
        delete retObj.__v
        delete retObj.passwordHash
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User