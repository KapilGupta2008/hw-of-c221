const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodeMailer=require("nodemailer")
const transporter=nodeMailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"gamingwithsilverboyy@gmail.com",
        pass:"uvtd hxrd gqqd mbzy"

    },
    secure:true
})

server.listen(process.env.PORT || 3030);