class Person {
    constructor(x, y, width, height, wcanvas, hcanvas, map) {
        this.width = width
        this.height = height
        
        this.x = x
        this.y = y
        
        this.wcanvas = wcanvas
        this.hcanvas = hcanvas
        
        this.map = map
        this.ctr = new Controls()
        this.point = 0

    }

    update() {
        this.#colision()
        this.#endMap()
    }

    #move(key) {
        if (key == 'ArrowLeft' && this.x - 1 >= 0) {
            this.x--
        }
        if (key == 'ArrowRight' && this.x + 1 <= this.wcanvas - 1) {
            this.x++
        }
        if (key == 'ArrowUp' && this.y - 1 >= 0) {
            this.y--
        }
        if (key == 'ArrowDown' && this.y + 1 <= this.hcanvas - 1) {
            this.y++
        }
    }

    #endMap() {

        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.#move(event.key)
                    break
                case 'ArrowRight':
                    this.#move(event.key)
                    break
                case 'ArrowUp':
                    this.#move(event.key)
                    break
                case 'ArrowDown':
                    this.#move(event.key)
                    break
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'blue'

        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    #colision() {

        for (let i = 0; i < this.hcanvas; i++) {
            for (let j = 0; j < this.wcanvas; j++) {
                if (i == this.y && j == this.x) {
                    if (this.map.map[i][j] == 1) {
                        this.map.map[i][j] = 0
                        this.map.map[rand()][rand()] = 1

                        this.point += 1
                        points(this.point)
                    }
                }

            }

        }
    }

}