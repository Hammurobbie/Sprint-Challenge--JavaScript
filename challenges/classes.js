// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakerClass{
    constructor(info){
    this.length = info.length,
    this.width = info.width,
    this.height = info.height
  }
  volume(length, width, height){
    return this.length * this.width * this.height;
  }

  surfaceArea(length, width, height){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */

  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboidNew = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  }) 
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidNew.volume()); // 100
  console.log(cuboidNew.surfaceArea()); // 130
  
  


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass{
    constructor(info){
        super(info);
    }
cubeVolume(length, width, height){
    return this.length * this.width * this.height;
}

cubeSurfaceArea(length, width, height){
    return 6 * Math.pow(this.height, 2);
    }
}

const cube = new CubeMaker({
    length: 9,
    width: 9,
    height: 9
  }) 

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea()); 