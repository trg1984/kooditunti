# Module dependencies
fs = require("fs")
express = require("express")
mongoose = require("mongoose")
passport = require("passport")
config = require("config")
app = express()

# Connect to mongodb
connect = ->
  options = server:
    socketOptions:
      keepAlive: 1

  mongoose.connect config.db, options
  return

connect()
mongoose.connection.on "error", console.log
mongoose.connection.on "disconnected", connect

# Bootstrap models
fs.readdirSync(__dirname + "/app/models").forEach (file) ->
  require __dirname + "/app/models/" + file  if file.slice(-7) is ".coffee"
  return

# Bootstrap passport config
require("./config/passport") passport, config

# Bootstrap application settings
require("./config/express") app, passport

# Bootstrap routes
require("./config/routes") app, passport

# EXPOSE
module.exports = app
