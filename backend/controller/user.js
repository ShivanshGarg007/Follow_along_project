// const multer = require('multer');

// const express=require("express")
// const path=require("path")
// const User=require("../model/user")
// const ErrorHandler = require("../utils/ErrorHandler")
// const router=express.Router()
// router.post("/create-user",upload.single("file"),async(requestAnimationFrame,res,next)=>
// {
//     const {name,email,password}=requestAnimationFrame.body
//     const userEmail=await User.findOne({email})
//     if(userEmail)
//     {
//         return next(new ErrorHandler("User already exists",400))
        
//     }
// const filename=req.file.filename
// const fileUrl=req.join(filename)
 
//     const user=
//     {
//         name:name,
//         email:email,
//         password:password,
//         avatar:fileUrl
//     }
//     console.log(user)
// })
// module.exports=router

const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize multer with storage
const upload = multer({ storage: storage });

// Import Express Router
const express = require('express');
const router = express.Router();

// Use `upload` properly
router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        res.status(200).json({ message: "File uploaded successfully", file: req.file });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
