const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const {
    sendWelcomeEmail,
    cancelUserEmail,
    //sendVerificationEmail,
  } = require("../../email/emailSend");


//Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load User model
const User = require('../../models/User');

//@route POST api/users/register
//@desc Register user
//@access Public
router.post("/register",(req,res)=>{
    //form validation
    const {errors,isValid} = validateRegisterInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            return res.status(400).json({email:"Email already exists"});
        }else{
            const newUser = new User({
                fullname:req.body.fullname,
                email:req.body.email,
                role:req.body.role,
                password:req.body.password
            });
            

            //Hash password before saving in database
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user=>res.json(user))
                        .catch(err=>console.log(err));
                });
            });

            sendWelcomeEmail(newUser.email, newUser.fullname,req.header("host") );
            // sendVerificationEmail(
            // newUser.email,
            // req.header("host")
            // );
            
        }
      });
    });


    // @route POST api/users/login
    // @desc Login user and return JWT token
    // @access Public
    router.post("/login",(req,res)=>{
        //Form validation
        const {errors,isValid} = validateLoginInput(req.body);

        //Check validation
        if(!isValid){
            return res.status(400).json(errors);
        }

        const email = req.body.email;
        const password = req.body.password;

        //Find user by email
        User.findOne({email}).then(user=>{
            //check if user exists
            if(!user){
                return res.status(404).json({emailnotfound:"Email not found"});
            }

            //check password
            bcrypt.compare(password,user.password).then(isMatch=>{
                if(isMatch){
                    //User matched
                    //Create JWT Payload
                    const payload = {
                        id:user.id,
                        fullname:user.fullname,
                        role:user.role
                    };

                    //sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn:31556926 // 1 year in seconds
                        },
                        (err,token)=>{
                            res.json({
                                success:true,
                                token:"Beares "+token
                            });
                        }
                        );
                }else{
                    return res.status(400).json({passwordincorrect:"Password incorrect"});
                }
            });
        });
    });

//deactivate a user
router.delete("/deactivate/:id",async (req,res)=>{
    var delData = await User.findByIdAndRemove(req.params.id).then(e=>{
        //console.log(delData);
        res.json({message:"Deleted Successfully"});
    });
});


module.exports = router;