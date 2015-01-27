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
    level: req.params.level

exports.loops = (req, res) ->
  res.render "exercises/loops/index",
    title: "Labyrintti"
    section: "exercise-page"
    subsection: "exercise-loops"
    exerciseName: "loops"
    level: req.params.level

exports.vars = (req, res) ->
  res.render "exercises/vars/index",
    title: "Muuttujat"
    section: "exercise-page"
    subsection: "exercise-vars"
    exerciseName: "vars"
    level: req.params.level

exports.ifs = (req, res) ->
  res.render "exercises/ifs/index",
    title: "Ehtolauseet"
    section: "exercise-page"
    subsection: "exercise-ifs"
    exerciseName: "ifs"
    level: req.params.level

exports.events = (req, res) ->
  res.render "exercises/events/index",
    title: "Tapahtumat"
    section: "exercise-page"
    subsection: "exercise-events"
    exerciseName: "events"
    level: req.params.level
