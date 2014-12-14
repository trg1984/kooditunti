exports.beginning = (req, res) ->
  res.render "surveys/beginning",
    title: "alkukysely"
    section: "survey-page"

exports.ending = (req, res) ->
  res.render "surveys/ending",
    title: "loppukysely"
    section: "survey-page"
