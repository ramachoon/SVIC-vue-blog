const express = require("express")
const path = require("path")
const multer = require("multer")
const cors = require("cors")
const bodyparse = require('body-parser')
const { db } = require("./db/db-utils")
let nodemailer = require('nodemailer');

const app = express()
const port = 8080


app.use(cors())

app.use(bodyparse.json({ limit: '10mb' }));
app.use(bodyparse.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())

const ADMIN_TOKEN_PATH = "/_token"

app.all("*", async (req, res, next) => {
  if (req.path.indexOf(ADMIN_TOKEN_PATH) > -1) {
    let { token } = req.headers
    let adminTokenSql = "SELECT * FROM admin WHERE `token` = ?"
    let adminResult = await db.async.all(adminTokenSql, [token])

    if (adminResult.err != null || adminResult.rows.length == 0) {
      res.send({
        code: 403,
        msg: "please log in first",
      })

      return
    } else {
      next()
    }
  } else {
    next()
  }
})

app.use("/admin", require("./routers/AdminRouter"))
app.use("/category", require("./routers/CategoryRouter"))
app.use("/blog", require("./routers/BlogRouter"))






let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: "info@motorbootschule.com",
    pass: "mops8elli"
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

app.post('/mail', (req, res, next) => {
  var name = req.body.name + ": " + req.body.email
  var email = 'svicimmigration@gmail.com'
  var subject = req.body.subject
  var message = req.body.message

  const mailOptions = {
    from: name,
    to: email,
    subject: subject,
    html: message
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "err"
      })
      console.log(err)
    }
    else {
      res.json({
        status: "success"
      })
      console.log("Email Sent" + data.response)
    }
  })
});

app.get('/total-access', (req, res) => {
  db.get('SELECT total FROM total WHERE id=1', [], (err, result) => {
    return res.json({ totalAccess: result })
  });
})

app.post('/increment-access', async (req, res) => {
  
  let currentValue;

  db.get('SELECT total FROM total WHERE id=1', [], (err, result) => {
    currentValue = result.total;
    currentValue = currentValue + 1;
    console.log(currentValue)
    db.run(`UPDATE total SET total = ${currentValue} WHERE id=1`, [], function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.json({ totalAccess: currentValue+1 });
    });
  });


});

const update = multer({
  dest: "./public/upload/temp",
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
})

app.use(update.any())
app.use("/editor", require("./routers/UploadRouter"))

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
  console.log(`Running: http://localhost:${port}/`)
})
