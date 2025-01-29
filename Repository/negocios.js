const mongoose = require('mongoose');

const negocioSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        datetime: {
            type: String,
            required: false
        },
        img: {
            type: String,
            required: false
        }        
    }
)

module.exports = mongoose.model('negocios', negocioSchema);