mongoose = require("mongoose")

exports.index = (req, res) ->
  res.render "exercises/index",
    title: "Harjoitukset",
    section: "exercise-links-page"
    subsection: ""

exports.basics = (req, res) ->
  res.render "exercises/basics/index",
    title: "Ohjeistus"
    section: "exercise-page"
    subsection: "exercise-basics"
    exerciseName: "basics"
    exercisePathName: "perusteet"
    color: "#9f005d"
    level: req.params.level

exports.loops = (req, res) ->
  res.render "exercises/loops/index",
    title: "Labyrintti"
    section: "exercise-page"
    subsection: "exercise-loops"
    exerciseName: "loops"
    exercisePathName: "toistolauseet"
    color: "#067195"
    level: req.params.level

exports.vars = (req, res) ->
  res.render "exercises/vars/index",
    title: "Muuttujat"
    section: "exercise-page"
    subsection: "exercise-vars"
    exerciseName: "vars"
    exercisePathName: "muuttujat"
    color: "#1c7563"
    level: req.params.level

exports.ifs = (req, res) ->
  res.render "exercises/ifs/index",
    title: "Ehtolauseet"
    section: "exercise-page"
    subsection: "exercise-ifs"
    exerciseName: "ifs"
    exercisePathName: "ehtolauseet"
    color: "#c2272d"
    level: req.params.level

exports.events = (req, res) ->
  res.render "exercises/events/index",
    title: "Koordinaatisto ja tapahtumat"
    section: "exercise-page"
    subsection: "exercise-events"
    exerciseName: "events"
    exercisePathName: "koordinaatisto-ja-tapahtumat"
    color: "#f36c00"
    level: req.params.level

exports.saveRating = (req, res) ->
  # quick and dirty...
  # (this is not controller stuff)
  er = mongoose.model('ExerciseRating')
  new er(
    eid: req.body.eid
    rating: req.body.rating
  ).save (err, comment, count) ->
    return

  res.send ""

