const path = require("path")
const sqlite3 = require("sqlite3").verbose()
const GenID = require("../utils/SnowFlake")

const db = new sqlite3.Database(path.join(__dirname, "blog.sqlite3"))
const genid = new GenID({ WorkerId: 1 })

// Promise
db.async = {}

db.async.all = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      resolve({ err, rows })
    })
  })
}

db.async.run = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, rows) => {
      resolve({ err, rows })
    })
  })
}

module.exports = { db, genid }
