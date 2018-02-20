const nodemailer = require('nodemailer');
const tls = require('tls');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
exports.sendMail = function() {
    console.log("sending...");
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'es.garcia430@uniandes.edu.co', // generated ethereal user
            pass: 'Anillo14'  // generated ethereal password
        },
        greetingTimeout: 4000
    });

    // transporter.verify((err, success)=>{
    //     if(err) console.log(err);
    //     else console.log('mail is ok');
    // });

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"Niko APP" <es.garcia430@uniandes.edu.co>', // sender address
        to: 'garciasantiago10@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?' // plain text body
    };

    // send mail with defined transport object
    return transporter.sendMail(mailOptions);


    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
}
