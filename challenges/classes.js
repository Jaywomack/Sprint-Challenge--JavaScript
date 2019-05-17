// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return `${this.length * this.width * this.height}`
    }
    surfaceArea() {
        return `${2 * (this.length * this.width + this.length * this.height + this.width * this .height)}`
    }


}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,

})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(4, 5, 5)); // 100
console.log(cuboid.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(attributes) {
        super(attributes)
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    cubeSurfaceArea() {
        return `${(this.length * this.width) *6 }`

    }
    cubeVolume() {
        return `${Math.pow(((this.length * this.width) *6), 3) }`
    }


}

const cube007 = new CubeMaker({
    length: 10,
    width: 20,
    height: 30,

})

console.log(cube007.cubeSurfaceArea())
console.log(cube007.cubeVolume())