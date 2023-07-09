const express = require("express")
const fs = require("fs")
const { genid } = require("../db/db-utils")

const router = express.Router()

router.post("/upload", async (req, res) => {
  if (!req.files){
    res.send({
      "error": 1,
      "message": "Uploaded Successfully"
    })

    return
  }

  let files = req.files
  let retFiles = []

  for (let file of files) {
    let fileExt = file.originalname.substring(file.originalname.lastIndexOf(".") + 1)
    let fileName = genid.NextId() + "." + fileExt
    fs.renameSync(
      process.cwd() + "/public/upload/temp/" + file.filename,
      process.cwd() + "/public/upload/" + fileName
    )

    retFiles.push("/upload/" + fileName)
  }

  res.send({
    "error": 0,
    "data": {
      "url": retFiles[0],
    }
  })
})

module.exports = router
