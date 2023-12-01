class Network {
    constructor(Map, Person) {
        this.Map = Map
        this.Person = Person

    }

    sceningMap(map) {
        for (let height = 0; height < map.length; height++) {
            for (let width = 0; width < map[height].length; width++) {
                if (map[height][width] == 1) {

                    if ((this.Person.y - height) > 0) {
                        // console.log('up');
                        this.Person.y -= 1
                    }
                    if ((this.Person.y - height) < 0) {
                        // console.log('down');
                        this.Person.y += 1
                    }
                    
                    if ((this.Person.x - width) > 0) {
                        // console.log('left');
                        this.Person.x -= 1
                    }
                    if ((this.Person.x - width) < 0) {
                        // console.log('right');
                        this.Person.x += 1
                    }
                }

            }
        }
    }
}