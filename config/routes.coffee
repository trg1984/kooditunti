# Module dependencies.
mongoose = require("mongoose")
home = require("home")
exercises = require("exercises")

# Expose
module.exports = (app, passport) ->
  app.get "/", home.index
  app.get "/harjoitukset", exercises.index
  app.get "/harjoitukset/maze", exercises.maze

  # Error handling
  app.use (err, req, res, next) ->

    # treat as 404
    if err.message and (~err.message.indexOf("not found") or (~err.message.indexOf("Cast to ObjectId failed")))
      return next()
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
