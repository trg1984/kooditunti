@Stage =
  world: null
  renderer: null
  gravity: null
  width: 600
  height: 600
  coordsTopSize: 40
  coordsLeftSize: 40
  blockWidth: 40
  blockHeight: 40
  verticalBlocks: null
  horizontalBlocks: null
  elements: {}
  init: ->
    @horizontalBlocks = (Stage.width-Stage.coordsLeftSize)/Stage.blockWidth
    @verticalBlocks = (Stage.height-Stage.coordsTopSize)/Stage.blockHeight
    Stage.world = Physics()
    Stage.renderer = Physics.renderer("canvas",
      el: "viewport"
      width: Stage.width-Stage.coordsLeftSize
      height: Stage.height-Stage.coordsTopSize
      meta: false # don't display meta data
      styles:
        # set colors for the circle bodies
        line:
          strokeStyle: "#351024"
        circle:
          strokeStyle: "#351024"
          lineWidth: 1
          fillStyle: "#d33682"
          angleIndicator: "#351024"
    )
    #Stage.gravity = Physics.behavior("constant-acceleration", { acc: { x: 0, y: 0.0006 } })
    Stage.gravity = Physics.behavior("constant-acceleration", { acc: { x: 0, y: 0 } })
    worldInitiated = false
    Stage.initWorld()

  initWorld: ->
    # add the renderer
    Stage.world.add Stage.renderer
    # render on each step
    Stage.world.on "step", ->
      Stage.world.render()
      Stage.renderer.drawLine 100, 100, { color: "#000000" }

    # bounds of the window
    viewportBounds = Physics.aabb(0, 0, Stage.width, Stage.height)

    # constrain objects to these bounds
    Stage.world.add Physics.behavior("edge-collision-detection",
      aabb: viewportBounds
      restitution: 0.5
      cof: 0.9
    )

    # ensure objects bounce when edge collision is detected
    Stage.world.add Physics.behavior("body-impulse-response")

    # add some gravity
    Stage.world.add Stage.gravity
    Stage.world.add Physics.behavior("body-collision-detection")
    Stage.world.add Physics.behavior("sweep-prune")

    # This would make the elements drag & drop
    # world.add(Physics.behavior('interactive', { el: renderer.el }))
    # Dont do it, since it gives too much power to control the world
    # without coding

    # subscribe to ticker to advance the simulation
    Physics.util.ticker.on (time, dt) ->
      Stage.world.step time
      return

    # start the ticker
    Physics.util.ticker.start()
    Stage.world.on "render", (data) ->

    # text can be easily added like this
    #Stage.world.on "render", (data) ->
      #data.renderer.ctx.font = "20px Georgia";
      #data.renderer.ctx.fillText("Hello World!",10,50);

    worldInitiated = true

  reset: ->
    @world.destroy() if @world.getBodies().length > 0
    @world = Physics()
    @world.add(@renderer)
    @initWorld()

  drawCoordinateGrid: (context) ->
    canvas = $("#gridcanvas").get(0)
    context = canvas.getContext("2d")
    bw = Stage.width-40
    bh = Stage.height-40
    p = 40; x = 0; y = 0
    context.font = "20px Boogaloo";
    context.fillStyle = '#ddd';
    coord = 1
    while x <= bw
      context.moveTo 0.5 + x + p, p
      context.lineTo 0.5 + x + p, bw + p
      textPad = if coord < 10 then 17 else 10
      context.fillText(coord,p+x+textPad,25);
      coord++
      x+= 40
    coord = 1
    context.textAlign = 'right';
    while y <= bh
      context.moveTo p, 0.5 + y + p
      context.lineTo bh + p, 0.5 + y + p
      textPad = if coord < 10 then 17 else 10
      context.fillText(coord,25,p+y+28);
      coord++
      y+= 40
    context.strokeStyle = "#ddd"
    context.stroke()
    context.restore()

  _createPreview: ->
    # add a preview
    preview = Physics.body('rectangle',
      x: 150 # x-coordinate
      y: 30 # y-coordinate
      vx: 0 # velocity in x-direction
      vy: 0 # velocity in y-direction
      width: 30
      height: 30
    )
    preview.restitution = 0
    # add to world and elementlist
    @world.add(preview);
    Stage.elements['preview'] = preview

  createElement: (name,pos,props) ->
    # to allow modifiable grid
    maxWidth = Stage.width-Stage.coordsLeftSize-Stage.blockWidth
    maxHeight = Stage.height-Stage.coordsTopSize-Stage.blockHeight
    xNum = yNum = 0;
    for posX in [0..maxWidth] by Stage.blockWidth
      xNum++
      yNum = 0
      for posY in [0..maxHeight] by Stage.blockWidth
        yNum++
        continue unless xNum is pos[0] and yNum is pos[1]
        type = if props and props['type'] then props['type'] else 'default'
        elem = switch type
          when 'default' then Physics.body 'circle',
            x: (posX+Stage.blockWidth/2)+1 # x-coordinate
            y: (posY+Stage.blockHeight/2)+1 # y-coordinate
            vx: 0 # velocity in x-direction
            vy: 0 # velocity in y-direction
            #width: Stage.blockWidth-1
            #height: Stage.blockHeight-1
            radius: (Stage.blockWidth/2)-2
          when 'obstacle' then Physics.body 'rectangle',
            x: (posX+Stage.blockWidth/2)+1 # x-coordinate
            y: (posY+Stage.blockHeight/2)+1 # y-coordinate
            vx: 0 # velocity in x-direction
            vy: 0 # velocity in y-direction
            width: Stage.blockWidth-1
            height: Stage.blockHeight-1
          when 'goal' then Physics.body "convex-polygon",
            x: (posX+Stage.blockWidth/2)+1 # x-coordinate
            y: (posY+Stage.blockHeight/2)+1 # y-coordinate
            vertices: [
              { x: 8, y: -14 },
              { x: -8, y: -14 },
              { x: -16, y: 0 },
              { x: -8, y: 14 },
              { x: 8, y: 14 },
              { x: 16, y: 0 }
            ]

        elem.name = name
        elem.properties = props if props
        elem.treatment = 'static'
        Stage.elements[name] = elem
        Stage.world.add(elem)
        return elem

  editElement: (name,prop) ->
    if elem = Stage.elements[name]
      console.log elem
      elem.state.pos.set(41,41);
      #elem.state.pos.x = 100
      #elem.state.pos.y = 100
