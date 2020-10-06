
// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey('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');




// const msg = {
//     to: 'dilushkumar1996@gmail.com', // Change to your recipient
//     from: 'dilushkumar1996@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//     .send(msg)
//     .then(() => {
//     console.log('Email sent')
//     })
//     .catch((error) => {
//     console.error(error)
//     })

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey('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');
const msg = {
    to: '2017cs029@stu.ucsc.cmb.ac.lk', // Change to your recipient
    from: 'dilushkumar1996@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
}
sgMail
    .send(msg)
    .then(() => {
    console.log('Email sent')
    })
    .catch((error) => {
    console.error(error)
    })

// const sendWelcomeEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: "2017cs085@stu.ucsc.cmb.ac.lk",
//     subject: "Thanks for joining in",
//     text: `Welcome to the app, ${name}. Let us know how you get alog with the app`,
//   });
// };

// const sendVerificationEmail = (email, host, token) => {
//   sgMail.send({
//     to: email,
//     from: "2017cs085@stu.ucsc.cmb.ac.lk",
//     subject: "Verify your account",
//     text:
//       "Hello,\n\n" +
//       "Please verify your account by clicking the link: \nhttp://" +
//       host +
//       "/users/confirmation/" +
//       token +
//       "\n",
//   });
// };

// const cancelUserEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: "2017cs085@stu.ucsc.cmb.ac.lk",
//     subject: "Account cancellation",
//     text: `Good bye, ${name}. Let us know why you have cancelled your account`,
//   });
// };

// module.exports = {
//   sendWelcomeEmail,
//   sendVerificationEmail,
//   cancelUserEmail,
// };

