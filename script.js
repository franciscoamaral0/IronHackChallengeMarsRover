let rover = {
    direction: 'N',
    x:0,
    y:0,
    travelLog: []
}


// MOVE ROVER TO LEFT
function turnLeft(rover) { // MOVE ROVER TO LEFT
    switch(rover.direction) {
        case 'N':
            rover.direction = 'W'
            break;
        case 'W':
            rover.direction = 'S'
            break;
        case 'S':
            rover.direction = 'E'
            break;
        case 'E':
            rover.direction = 'N'
            break;
    
    }
    console.log(`turnLeft was called! Rover is now fancing ${rover.direction}`);
  }
  
  
  // MOVE ROVER TO RIGHT
  function turnRight(rover) {
    switch(rover.direction) {
        case 'N':
            rover.direction = 'E'
            break;
        case 'W':
            rover.direction = 'N'
            break;
        case 'S':
            rover.direction = 'W'
            break;
        case 'E':
            rover.direction = 'S'
            break;
    
    }
    console.log(`turnRight was called! Rover is now fancing ${rover.direction}`);
  }
  

// MOVE ROVER TO FORWARD
  function moveForward(rover) {

    if(rover.direction === 'N' && rover.y > 0){
        rover.y--
    }
    else if (rover.direction === 'E' && rover.x < 9){
        rover.x++
    }  
    else if (rover.direction === 'S' && rover.y < 9){
        rover.y++
    } 
    else if( rover.direction === 'W' && rover.x > 0){
        rover.x--
    }
    rover.travelLog.push(`${rover.x} ${rover.y}`)
    console.log(`moveForward was called. position X:${rover.x} position Y: ${rover.y}`)
    
  }

  // TRANSFORM FUNCTIONS TO LETTERS 
  function transformPosition(transform){
      console.log(transform)
      for(i = 0; i< transform.length; i++){
        //   console.log(transform[i])
          switch (transform[i]){
            case 'r':
                turnRight(rover)
                break;
            case 'l':
                turnLeft(rover)
                break;
            case 'f':
                moveForward(rover)
                break;
          }
      }
  }

  transformPosition('rrffflfffffff')

  

