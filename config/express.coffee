# Module dependencies.
express = require("express")
session = require("express-session")
compression = require("compression")
morgan = require("morgan")
cookieParser = require("cookie-parser")
cookieSession = require("cookie-session")
bodyParser = require("body-parser")
methodOverride = require("method-override")
swig = require("swig")
mongoStore = require("connect-mongo")(session)
flash = require("connect-flash")
winston = require("winston")
helpers = require("view-helpers")
config = require("config")
pkg = require("../package.json")
env = process.env.NODE_ENV or "development"

module.exports = (app, passport) ->

  # Compression middleware (should be placed before express.static)
  app.use compression(threshold: 512)

  # Static files middleware
  app.use express.static(config.root + "/public")

  # Use winston on production
  log = undefined
  if env isnt "development"
    log = stream:
      write: (message, encoding) ->
        winston.info message
        return
  else
    log = "dev"

  # Don't log during tests
  # Logging middleware
  app.use morgan(log)  if env isnt "test"

  # Swig templating engine settings
  swig.setDefaults cache: false  if env is "development" or env is "test"

  # set views path, template engine and default layout
  app.engine "html", swig.renderFile
  app.set "views", config.root + "/app/views"
  app.set "view engine", "html"

  # expose stuff to views
  app.use (req, res, next) ->
    res.locals.pkg = pkg
    res.locals.env = env
    next()
    return

  # bodyParser should be above methodOverride
  app.use bodyParser.urlencoded({ extended: true })
  app.use bodyParser.json()

  app.use methodOverride((req, res) ->
    if req.body and typeof req.body is "object" and "_method" of req.body

      # look in urlencoded POST bodies and delete it
      method = req.body._method
      delete req.body._method

      method
  )

  # cookieParser should be above session
  app.use cookieParser()
  app.use cookieSession(secret: "secret")
  app.use session(
    secret: pkg.name
    saveUninitialized: true
    resave: true
    store: new mongoStore(
      url: config.db
      collection: "sessions"
    )
  )

  # use passport session
  app.use passport.initialize()
  app.use passport.session()

  # connect flash for flash messages - should be declared after sessions
  app.use flash()

  # should be declared after session and flash
  app.use helpers(pkg.name)

  return
