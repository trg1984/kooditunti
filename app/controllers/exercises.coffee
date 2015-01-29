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
    level: req.params.level

exports.loops = (req, res) ->
  res.render "exercises/loops/index",
    title: "Labyrintti"
    section: "exercise-page"
    subsection: "exercise-loops"
    exerciseName: "loops"
    exercisePathName: "toistolauseet"
    level: req.params.level

exports.vars = (req, res) ->
  res.render "exercises/vars/index",
    title: "Muuttujat"
    section: "exercise-page"
    subsection: "exercise-vars"
    exerciseName: "vars"
    exercisePathName: "muuttujat"
    level: req.params.level

exports.ifs = (req, res) ->
  res.render "exercises/ifs/index",
    title: "Ehtolauseet"
    section: "exercise-page"
    subsection: "exercise-ifs"
    exerciseName: "ifs"
    exercisePathName: "ehtolauseet"
    level: req.params.level

exports.events = (req, res) ->
  res.render "exercises/events/index",
    title: "Koordinaatisto ja tapahtumat"
    section: "exercise-page"
    subsection: "exercise-events"
    exerciseName: "events"
    exercisePathName: "koordinaatisto-ja-tapahtumat"
    level: req.params.level
