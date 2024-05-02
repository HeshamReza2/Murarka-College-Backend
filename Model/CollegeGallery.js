const mongoose = require('mongoose')

const CollegeGallery = new mongoose.Schema({
    image: { type: String}
})

module.exports = mongoose.model('CollegeGallery', CollegeGallery)