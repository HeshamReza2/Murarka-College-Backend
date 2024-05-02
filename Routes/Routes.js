const express = require('express')
const router = express.Router()

const { searchAdmin, loginData, signupData, updateAdmin, deleteAdmin } = require('../Controller/userControl')

const { getCollegeGallery, uploadCollegeGallery } = require('../Controller/CollegeGalleryControl')

router.get('/college-gallery', getCollegeGallery)
router.post('/upload-gallery', uploadCollegeGallery)



//admin login, signup, update, delete routes
router.post('/searchAdmin', searchAdmin) //search an admin user id
router.post('/login', loginData) //validate an admin login
router.post('/signup', signupData) //create an admin account
router.patch('/updateAdmin', updateAdmin) //update an admin account data
router.delete('/deleteAdmin', deleteAdmin) //delete an admin account data



module.exports = router