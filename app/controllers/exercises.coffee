exports.index = (req, res) ->
  res.render "exercises/index",
    title: "Harjoitukset",
    section: "exercise-links-page"
    subsection: ""

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
