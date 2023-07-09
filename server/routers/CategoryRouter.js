const express = require("express")
const { db, genid } = require("../db/db-utils")

const router = express.Router()

router.post("/_token/add", async (req, res) => {
  let { name } = req.body
  const inspectSql = "SELECT * FROM category WHERE `name`= ?"
  const insertSql = "INSERT INTO category (`id`, `name`) VALUES (?, ?)"
  let inspectResult = await db.async.all(inspectSql, [name])

  if (inspectResult.err != null || inspectResult.rows.length > 0) {
    res.send({
      code: 403,
      msg: "sort-repeat"
    })

    return
  }

  let { err, rows } = await db.async.run(insertSql, [genid.NextId(), name])

  if (err == null) {
    res.send({
      code: 200,
      msg: "Added successfully",
    })
  } else {
    res.send({
      code: 403,
      msg: "add failed",
    })
  }
})

router.put("/_token/update", async (req, res) => {
  let { id, name } = req.body
  const updateSql = "UPDATE category SET `name` = ? WHERE `id` = ?"
  let { err, rows } = await db.async.run(updateSql, [name, id])

  if (err == null) {
    res.send({
      code: 200,
      msg: "Successfully modified",
    })
  } else {
    res.send({
      code: 403,
      msg: "fail to edit",
    })
  }
})

router.delete("/_token/delete", async (req, res) => {
  let id = req.query.id
  const deleteSql = "DELETE FROM category WHERE `id` = ?"
  let { err, rows } = await db.async.run(deleteSql, [id])

  if (err == null) {
    res.send({
      code: 200,
      msg: "successfully deleted",
    })
  } else {
    res.send({
      code: 403,
      msg: "failed to delete",
    })
  }
})

router.get("/list", async (req, res) => {
  const searchSql = "SELECT * FROM category ORDER BY id ASC"
  let { err, rows } = await db.async.all(searchSql, [])

  if (err == null) {
    res.send({
      code: 200,
      msg: "search successful",
      rows,
    })
  } else {
    res.send({
      code: 403,
      msg: "search failed",
    })
  }
})

module.exports = router
