const express = require("express")
const { db, genid } = require("../db/db-utils")

const router = express.Router()

router.post("/_token/add", async (req, res) => {
  let { title, categoryId, content } = req.body
  let id = genid.NextId()
  let createTime = new Date().getTime()
  const insertSql = "INSERT INTO blog (`id`, `title`, `category_id`, `content`, `create_time`) VALUES (?, ?, ?, ?, ?)"
  let params = [id, title, categoryId, content, createTime]
  let { err, rows } = await db.async.run(insertSql, params)

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
  let { id, title, categoryId, content } = req.body
  const updateSql = "UPDATE blog SET `title` = ?, `category_id` = ?, `content` = ? WHERE `id` = ?"
  let params = [title, categoryId, content, id]
  let { err, rows } = await db.async.run(updateSql, params)

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
  const deleteSql = "DELETE FROM blog WHERE `id` = ?"
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

router.get("/search", async (req, res) => {
  let { keyword, categoryId, page, pageSize } = req.query
  keyword = (keyword == null) ? "" : keyword
  categoryId = (categoryId == null) ? 0 : categoryId
  page = (page == null) ? 1 : page;
  pageSize = (pageSize == null) ? 10 : pageSize

  let params = []
  let whereSql = []
  let whereSqlStr = ""

  if (categoryId != 0) {
      whereSql.push(" `category_id` = ? ")
      params.push(categoryId)
  }

  if (keyword != "") {
      whereSql.push(" (`title` LIKE ? OR `content` LIKE ?) ")
      params.push("%" + keyword + "%")
      params.push("%" + keyword + "%")
  }

  if (whereSql.length > 0) {
      whereSqlStr = " WHERE " + whereSql.join(" AND ")
  }

  let searchSql = " SELECT id, category_id, create_time, title, content, is_expanded FROM blog " + whereSqlStr + " ORDER BY create_time DESC LIMIT ?, ? "
  let searchSqlParams = params.concat([(page - 1) * pageSize, pageSize])

  let searchCountSql = " SELECT count(*) AS `count` FROM blog " + whereSqlStr
  let searchCountParams = params

  let searchResult = await db.async.all(searchSql, searchSqlParams)
  let countResult = await db.async.all(searchCountSql, searchCountParams)

  if (searchResult.err == null && countResult.err == null) {
    res.send({
      code: 200,
      msg: "search successful",
      data: {
        keyword,
        categoryId,
        page,
        pageSize,
        rows: searchResult.rows,
        count: countResult.rows[0].count,
      }
    })
  } else {
    res.send({
      code: 403,
      msg: "Query failed",
    })
  }
})
router.get("/search_article", async (req, res) => {
  let { keyword, categoryId, page, pageSize } = req.query
  keyword = (keyword == null) ? "" : keyword
  categoryId = (categoryId == null) ? 0 : categoryId
  page = (page == null) ? 1 : page;
  pageSize = (pageSize == null) ? 10 : pageSize

  let params = []
  let whereSql = []
  let whereSqlStr = ""

  if (categoryId != 0) {
      whereSql.push(" `category_id` = ? ")
      params.push(categoryId)
  }

  if (keyword != "") {
      whereSql.push(" (`title` LIKE ? OR `content` LIKE ?) ")
      params.push("%" + keyword + "%")
      params.push("%" + keyword + "%")
  }

  if (whereSql.length > 0) {
      whereSqlStr = " WHERE " + whereSql.join(" AND ")
  }

  let searchSql = " SELECT id, category_id, create_time, title, substr(content,0,50) AS content, is_expanded FROM blog " + whereSqlStr + " ORDER BY create_time DESC LIMIT ?, ? "
  let searchSqlParams = params.concat([(page - 1) * pageSize, pageSize])

  let searchCountSql = " SELECT count(*) AS `count` FROM blog " + whereSqlStr
  let searchCountParams = params

  let searchResult = await db.async.all(searchSql, searchSqlParams)
  let countResult = await db.async.all(searchCountSql, searchCountParams)

  if (searchResult.err == null && countResult.err == null) {
    res.send({
      code: 200,
      msg: "search successful",
      data: {
        keyword,
        categoryId,
        page,
        pageSize,
        rows: searchResult.rows,
        count: countResult.rows[0].count,
      }
    })
  } else {
    res.send({
      code: 403,
      msg: "Query failed",
    })
  }
})

router.get("/detail", async (req, res) => {
  let { id } = req.query
  let detailSql = "SELECT * FROM blog WHERE `id` = ?"
  let { err, rows } = await db.async.all(detailSql, [id])

  if (err == null) {
    res.send({
      code: 200,
      msg: "get-success",
      rows,
    })
  } else {
    res.send({
      code: 403,
      msg: "get-fail",
    })
  }
})

module.exports = router
