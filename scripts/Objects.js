class Objects{
    constructor(lines, coluns, width, height){
        this.lines = lines
        this.coluns = coluns

        this.map = []

        this.jRand = rand()
        this.iRand = rand()

        this.#mapingObjects()
    }

    #mapingObjects(){
        let element = []
        for (let i = 0; i < this.lines; i++) {
            for (let j = 0; j < this.coluns; j++) {
                // if (j == 0 || j == this.coluns - 1) {
                if (i == this.iRand && j == this.jRand) {
                    element.push(true)      
                    
                }else{
                    element.push(false)                         
                }
            }
            this.map.push(element)
            element = []
        }
    }

}