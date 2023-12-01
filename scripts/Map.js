class Map {
  constructor(x, y, width, height, wObj, hObj) {
    this.x = x
    this.width = width * 2
    this.height = height * 2

    this.wObj = wObj 
    this.hObj = hObj

    this.left = x - width
    this.right = x + width
    this.top = y - height
    this.bottom = y + height

    this.bottomLeft = {
      x: this.left, y: this.bottom
    }
    this.topLeft = {
      x: this.left, y: this.top
    }
    this.bottomRight = {
      x: this.right, y: this.bottom
    }
    this.topRight = {
      x: this.right, y: this.top
    }

    this.limitsMap = [
      [this.topRight, this.bottomRight],
      [this.topLeft, this.bottomLeft]
    ]

    this.map = []

    this.#insertTrap()
  }

  #insertTrap() {
    let obj = new Objects(canvas.width, canvas.height)
    let element = []

    for (let i = 0; i < canvas.height; i++) {
      for (let j = 0; j < canvas.width; j++) {
        if (obj.map[i][j]) {
          element.push(1)
        } else {
          element.push(0)
        }

      }
      this.map[i] = element
      element = []
    }
  }

  #trap(ctx){
    ctx.fillStyle = 'red'

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.map[i][j] == 1) {
          ctx.fillRect(j, i, this.wObj, this.hObj)
        }
      }
    }
  }

  draw(ctx) {
    this.#trap(ctx)
  }

}