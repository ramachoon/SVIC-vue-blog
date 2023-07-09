const express = require("express")
const { v4: uuidv4 } = require("uuid")
const { db } = require("../db/db-utils")

const router = express.Router()

router.post("/changepassword", async (req, res) => {
  let { account, old_password, new_password } = req.body;
  console.log(account, old_password, new_password)
  let resetSql = "UPDATE admin SET `account` = ?, `password` = ? WHERE `id` = 1";
  let getOldPassword = "SELECT `password` FROM admin WHERE `id` = 1";
  let {err, rows } = await db.async.all(getOldPassword, []);
  const originalPassword = rows[0].password;

  if (originalPassword === old_password) {
    await db.async.run(resetSql, [account, new_password]);
    res.send({
      code: 200,
      msg: "Successfully changed.",
      data: {
        account,
        password: new_password
      }
    })
  } else {
    res.send ({
      code: 403,
      msg: "Password is incorrect."
    })
  }
});

router.post("/blogadmin", async (req, res) => {
  let { account, password } = req.body
  let searchSql = "SELECT * FROM admin WHERE `account` = ? AND `password` = ?"
  let { err, rows } = await db.async.all(searchSql, [account, password])

  if (err == null && rows.length > 0) {
    let loginToken = uuidv4()
    let updateTokenSql = "UPDATE admin SET `token` = ? WHERE `id` = ?"
    await db.async.run(updateTokenSql, [loginToken, rows[0].id])

    let adminInfo = rows[0]
    adminInfo.token = loginToken
    adminInfo.password = ""

    res.send({
      code: 200,
      msg: "Login Successful",
      data: adminInfo,
    })
  } else {
    res.send({
      code: 403,
      msg: "Login Failed",
    })
  }
})

module.exports = router
