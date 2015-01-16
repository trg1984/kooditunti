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

  closest: (num, arr) ->
    curr = arr[0]
    diff = Math.abs(num - curr)
    val = 0

    while val < arr.length
      newdiff = Math.abs(num - arr[val])
      if newdiff < diff
        diff = newdiff
        curr = arr[val]
      val++
    curr
