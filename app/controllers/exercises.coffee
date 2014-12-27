exports.index = (req, res) ->
  res.render "exercises/index",
    title: "Harjoitukset",
    section: "exercise-page"
    subsection: ""

exports.maze = (req, res) ->
  res.render "exercises/maze/index",
    title: "Labyrintti"
    section: "exercise-page"
    subsection: "exercise-maze"
    exerciseName: "maze"
    level: req.params.level

exports.vars = (req, res) ->
  res.render "exercises/vars/index",
    title: "Muuttujat"
    section: "exercise-page"
    subsection: "exercise-vars"
    exerciseName: "vars"
    level: req.params.level
