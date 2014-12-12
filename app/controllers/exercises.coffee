exports.index = (req, res) ->
  res.render "exercises/index",
    title: "Harjoitukset",
    section: "exercise-page"
    subsection: ""
  return

exports.maze = (req, res) ->
  res.render "exercises/maze/index",
    title: "Labyrintti"
    section: "exercise-page"
    subsection: "exercise-maze"
    exerciseName: "maze"
  return
