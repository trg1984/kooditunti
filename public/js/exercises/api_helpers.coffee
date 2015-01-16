@ApiHelpers =
  validateElementProperties: (props) ->
    r = {}
    if props.name? then r['name'] = props.name
    if props.radius? then r['radius'] = @validateSingleProperty('radius', props.radius)
    if props.width? then r['width'] = @validateSingleProperty('width', props.width)
    if props.height? then r['height'] = @validateSingleProperty('height', props.height)
    if props.position? then r['position'] = @validateSingleProperty('position', props.position)
    if props.velocity? then r['velocity'] = @validateSingleProperty('velocity', props.velocity)
    if props.type? and props.type in ['circle','rectangle'] then r['type'] = props.type
    return r

  # extra properties validator
  # for absolutely confirming that user does not set values that won't work
  validateSingleProperty: (key,value) ->
    return null if value is ""
    rv = switch key
      when 'width', 'height'
        nv = value
        nv = 550 if value > 550
        nv = 1 if value < 0 or isNaN parseInt(value)
        nv
      when 'radius'
        nv = value
        nv = 250 if value > 250
        nv = 1 if value < 0 or isNaN parseInt(value)
        nv
      when 'position', 'velocity'
       if typeof value isnt 'object' and value.length isnt 2
       then @defaultPropertyValues[key]
       else value
    return rv

  defaultPropertyValues:
    position: [1,1]
    velocity: [0,0]
    width: 100
    height: 100
    radius: 50
