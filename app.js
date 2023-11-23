const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = process.env.port || 3000
const router = require("./Router/wa")
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use("/.netlify/functions/api", router)

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

module.exports.handler  = serverless(app)