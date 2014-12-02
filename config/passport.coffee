
#!
# * Module dependencies.
# 
mongoose = require("mongoose")
User = mongoose.model("User")
local = require("./passport/local")

###*
Expose
###
module.exports = (passport, config) ->
  
  # serialize sessions
  passport.serializeUser (user, done) ->
    done null, user.id
    return

  passport.deserializeUser (id, done) ->
    User.findOne
      _id: id
    , (err, user) ->
      done err, user
      return

    return

  
  # use these strategies
  passport.use local
  return
