const canvas = document.querySelector('canvas')
canvas.height = 110
canvas.width = 110

const ctx = canvas.getContext('2d')

ObjHeight = 5
ObjWidth = 5

map = new Map(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2, ObjWidth, ObjHeight)

obj = new Objects(canvas.width, canvas.height)

controls = new Controls()

personHeight = 5
personWidth = 5

xInitial = 1
yInitial = 2

person = new Person(xInitial, yInitial, personWidth, personHeight, canvas.width, canvas.height, map)

ntw = new Network(map.map, person)

loop()

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  map.draw(ctx)
  
  person.update()
  person.draw(ctx)
  
  ntw.sceningMap(map.map)

  requestAnimationFrame(loop)
}