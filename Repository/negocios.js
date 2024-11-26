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
        datatime: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }        
    }
)

module.exports = mongoose.model('negocios', negocioSchema);