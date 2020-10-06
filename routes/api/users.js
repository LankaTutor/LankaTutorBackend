const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey('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');

// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');

// const options = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:"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"
//     },
// }));

// const mailer = nodemailer.createTransport(sendgridTransport(options));

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
                password:req.body.password
            });
            
            
            // const msg = {
            //     to: req.body.email, // Change to your recipient
            //     from: '2017cs029@stu.ucsc.cmb.ac.lk', // Change to your verified sender
            //     subject: 'Sending with SendGrid is Fun',
            //     text: 'and easy to do anywhere, even with Node.js',
            //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            //   }
            //   sgMail
            //     .send(msg)
            //     .then(() => {
            //       console.log('Email sent')
            //     })
            //     .catch((error) => {
            //       console.error(error)
            //     })

            

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

            // var mail = {
            //     to: req.body.email,
            //     from: 'dilushvasu1996@gmail.com',
            //     subject: 'Hi there',
            //     text: 'Awesome sauce',
            //     html: '<b>Awesome sauce</b>'
            // };

            //  mailer.sendMail(mail, function(err, res) {
            //     if (err) { 
            //         console.log(err) 
            //     }
            //     console.log(res);
            // });
            
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
                        fullname:user.fullname
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

module.exports = router;