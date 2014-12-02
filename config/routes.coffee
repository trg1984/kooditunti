
###*
Module dependencies.
###
mongoose = require("mongoose")
home = require("home")

###*
Expose
###
module.exports = (app, passport) ->
  app.get "/", home.index
  
  ###*
  Error handling
  ###
  app.use (err, req, res, next) ->
    
    # treat as 404
    return next()  if err.message and (~err.message.indexOf("not found") or (~err.message.indexOf("Cast to ObjectId failed")))
    console.error err.stack
    
    # error page
    res.status(500).render "500",
      error: err.stack

    return

  
  # assume 404 since no middleware responded
  app.use (req, res, next) ->
    res.status(404).render "404",
      url: req.originalUrl
      error: "Not found"

    return

  return
