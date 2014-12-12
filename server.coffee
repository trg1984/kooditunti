# Module dependencies
fs = require("fs")
express = require("express")
mongoose = require("mongoose")
passport = require("passport")
config = require("config")
coffeeMiddleware = require('coffee-middleware')
sassMiddleware = require('node-sass-middleware')
app = express()

# coffeescript & sass
app.use coffeeMiddleware({src: __dirname + "/public"})
app.use sassMiddleware({src: __dirname + "/public"})

# connect to mongodb
connectToDB = ->
  options = server:
    socketOptions:
      keepAlive: 1

  mongoose.connect config.db, options
  return

connectToDB()
mongoose.connection.on "error", console.log
mongoose.connection.on "disconnected", connectToDB

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
