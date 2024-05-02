const CollegeGallery = require('../Model/CollegeGallery')

exports.getCollegeGallery = async(req, res) => {
    try {
        const limit = req.query.limit || 9
        const skip = req.query.skip || 0
        const getCollegeGallery = await CollegeGallery.find().limit(limit).skip(skip)
        res.json(getCollegeGallery)
    }catch(err){
        message: err
    }
}

exports.uploadCollegeGallery = async(req, res) => {
    const data = new CollegeGallery({
        image: req.body.image
    })

    try {
        const uploadCollegeGallery = await data.save()
        res.json(uploadCollegeGallery)
    }
    catch(err){
        message: err
    }
}