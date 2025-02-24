const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'contatestenodejs@gmail.com',
        pass : 'latu tjyt npdh kgyb'
    }
})

const mailOptions = {
    from : 'contatestenodejs@gmail.com',
    to : 'olucas2k0@gmail.com',
    subject : 'Sending email using node.js',
    text : '3 Test!'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('Email sent' + info.response)
    }
})