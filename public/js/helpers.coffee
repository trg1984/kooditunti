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
