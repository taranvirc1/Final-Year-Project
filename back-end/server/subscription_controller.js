const nodemailer = require("nodemailer")
const db = require("./db/db_conn");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD},
    tls: {
        rejectUnauthorized: false,
    }
})

module.exports = {
    sendThreadEmail: async (subject, message, send_to, sent_from) => {
   

    const options = {
        from: sent_from,
        to: send_to,
        subject: subject,
        html: message
    }

    app.post("/api/sendthreademail", async (req, res) =>{

        const {email} = req.body;
        try {
          const send_to = "pererakenura@gmail.com";
          const sent_from = process.env.EMAIL_USERNAME;
          const subject = "Testing sub email"
          const message = `
              <h3>Hello user</h3>
              <p>the forum thread thread that you are subscribed to has a new post"</p>
          `
          await sendThreadEmail(subject, message, send_to, sent_from)
          res.status(200).json({success: true, message: "Email alerts sent"})
        } catch (error){
          res.status(500).json(error.message)
      
        }
      })

    // Send Email
    transporter.sendMail(options, function(err, info) {
        if (err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })

}
};