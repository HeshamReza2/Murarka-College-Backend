const Admins = require('../Model/Admins')

//search an admin id
exports.searchAdmin = async(req, res) => {
    const user_id = req.body.user_id

    try{
        const searchAdmin = await Admins.find({ user_id: user_id})
        res.json(searchAdmin)
    }
    catch(err){
        message: err
    }
}

//validate an admin login
exports.loginData = async(req, res) => {
    const data = {
        user_id: req.body.user_id,
        password: req.body.password
    }

    try{
        const loginData = await Admins.find(data)
        res.json(loginData)
    }
    catch(err){
        message: err
    }
}

//create an admin account
exports.signupData = async(req, res) => {
    const data = new Admins({
        user_id: req.body.user_id,
        password: req.body.password,
        department: req.body.department
    })
    try{
        const signupData = await data.save()
        res.json(signupData)
    }
    catch(err){
        message: err
    }
}

//update an admin account
exports.updateAdmin = async(req, res) => {
    try{
        const data = await Admins.updateOne(
            {_id: req.params.postId},
            {
                $set: {
                    user_id: req.body.user_id,
                    password: req.body.password,
                    department: req.body.department
                }
            }
        )
        res.json(data)
    }
    catch(err){
        message: err
    }
}

//delete an admin account
exports.deleteAdmin = async(req, res) => {
    try{
        const data = await Admins.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch(err){
        message: err
    }
}

// = async(req, res) => {
//     try{
        
//     }
//     catch(err){
//         message: err
//     }
// }