const express = require("express");
const config = require("./config.json");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();

const port = process.env.PORT || 9000;

app.use('/v1', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: config.email_sender,
        pass: config.password_sender,
    },
    secure: true,
});

route.post('/attachments-mail', (req, res) => {
    const {subject, text, content} = req.body;
    const mailData = {
        from: config.email_sender,
        to: config.email_epitech,
        subject: subject,
        text: text,
        icalEvent: {
            filename: 'epitech_event.ics',
            method: 'request',
            content: content
        }
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});