# Module dependencies.
mongoose = require("mongoose")
home = require("home")
exercises = require("exercises")
playground = require("playground")
surveys = require("surveys")

# Expose
module.exports = (app, passport) ->
  #app.get "/", home.index
  app.redirect "/", "/harjoitukset";

  # exercises
  app.get "/harjoitukset", exercises.index

  app.get "/harjoitukset/basics/:level", exercises.basics
  app.redirect "/harjoitukset/basics", "/harjoitukset/basics/1";

  app.get "/harjoitukset/loops/:level", exercises.loops
  app.redirect "/harjoitukset/loops", "/harjoitukset/loops/1";

  app.get "/harjoitukset/vars/:level", exercises.vars
  app.redirect "/harjoitukset/vars", "/harjoitukset/vars/1";

  app.get "/harjoitukset/ifs/:level", exercises.ifs
  app.redirect "/harjoitukset/ifs", "/harjoitukset/ifs/1";

  # playground
  app.get "/vapaa-kentta", playground.index

  # surveys
  app.get "/alkukysely", surveys.beginning
  app.get "/loppukysely", surveys.ending

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
