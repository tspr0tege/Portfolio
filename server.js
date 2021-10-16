require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const port = process.env.PORT || 3000;
const emailUser = process.env.USER;
const emailPass = process.env.PASS;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

  //let testAccount = await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: emailUser, 
    pass: emailPass, 
  },
});

app.get('/', (req, res) => {
  res.status(200).sendFile('./index.html').end();
});

app.post('/email', (req, res) => {
  // console.log(req.body);  
  let {name, email, message} = req.body;

  sendEmail(name, email, message)
  .then((info) => {
    console.log(info);
    res.status(info.response.slice(0,3)).send(info).end();
  })
  .catch((err) => {
    console.error(err);
    res.send(err).end();
  });
});

async function sendEmail(name, email, message) {
  return (
    transporter.sendMail({
      from: 'squallpl@yahoo.com', // sender address
      to: 'squallpl1983@gmail.com', // list of receivers
      subject: "Contact from your Portfolio", // Subject line
      text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`, 
      // html: "<b>Hello world?</b>", // html body
    })
  );
}

// sendEmail().catch(console.error);
