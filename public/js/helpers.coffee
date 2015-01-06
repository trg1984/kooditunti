@Helpers =
  storeValues: (id,data) ->
    toStore = JSON.stringify(data)
    localStorage.setItem(id,toStore)

  retrieveValues: (id,key) ->
    stored = localStorage.getItem(id)
    data = JSON.parse(stored) if stored
    return {} unless data
    return data unless key
    return data[key]

  # extra properties validator
  # for absolutely confirming that user does not set values that won't work
  epValidate: (key,value) ->
    return null if value is ""
    rv = switch key
      when 'radius'
        nv = value
        nv = 250 if value > 250
        nv = 1 if value < 0 or isNaN parseInt(value)
        nv
      when 'position'
        @epDefaults.position if typeof value isnt 'object' and value.length isnt 2
    return rv

  epDefaults:
    position: [1,1]
