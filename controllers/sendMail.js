const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ed.brakus@ethereal.email',
        pass: 'ce6u7hhVHgxkEVH2aV'
    }
});

  let info = await transporter.sendMail({
    from: '"Ndubuisi Agughara 👻" <ed.brakus@ethereal.email>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello Thapa", // Subject line
    text: "Hello YT Thapa", // plain text body
    html: "<b>Hello YT Thapa</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;