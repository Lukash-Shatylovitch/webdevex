const mongoose = require('mongoose')

const looserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    looserToChannel: {
        type: String,
        required: true
    },
    looserDate: {
        type: String,
        required: true,
        default: Date.now

    }

})
module.exports = mongoose.model('Looser', looserSchema)