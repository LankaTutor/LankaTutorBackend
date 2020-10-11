
// const sgMail = require('@sendgrid/mail');


const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRIDAPI);
// const msg = {
//     to: 'khosalan18@gmail.com', // Change to your recipient
//     from: '2017cs029@stu.ucsc.cmb.ac.lk', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
// }
// sgMail
//     .send(msg)
//     .then(() => {
//     console.log('Email sent')
//     })
//     .catch((error) => {
//     console.error(error)
//     })


// sgMail.setApiKey(process.env.SENDGRID_API_KEY); //need to assign the api key in config

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: '2017cs029@stu.ucsc.cmb.ac.lk',
    subject: "Thanks for joining with us",
    text: `Welcome to LankaTutor, ${name}. Keep in touch with us`,
    text:
    "Hello,\n\n" +
    "Please verify your account by clicking the link: \nhttp://localhost:3000/login" +
    "\n",
  }).then(() => {
        console.log('Email sent')
        })
        .catch((error) => {
        console.error(error)
        });
};

// const sendVerificationEmail = (email, host) => {
//   sgMail.send({
//     to: email,
//     from: '2017cs029@stu.ucsc.cmb.ac.lk',
//     subject: "Verify your account",
//     text:
//       "Hello,\n\n" +
//       "Please verify your account by clicking the link: \nhttp://" +
//       host +
//       "\n",
//   }).then(() => {
//     console.log('Email sent')
//     })
//     .catch((error) => {
//     console.error(error)
//     });;
// };

const cancelUserEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: '2017cs029@stu.ucsc.cmb.ac.lk',
    subject: "Account cancellation",
    text: `Good bye, ${name}. Let us know why you have cancelled your account`,
  }).then(() => {
    console.log('Email sent')
    })
    .catch((error) => {
    console.error(error)
    });;;
};

module.exports = {
  sendWelcomeEmail,
  //sendVerificationEmail,
  cancelUserEmail,
};