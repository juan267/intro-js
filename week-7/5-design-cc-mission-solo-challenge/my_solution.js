 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description: The goal of the game is to be able to takeoff
// Overall mission: In order to takeoff the airplane most first refuel and also pick the passagers wating for their flight
// Goals: Takeoff with both passangers and fuel
// Characters: Plane (747) , Fuel station, passangers
// Objects: Plane , fuel , passangers
// Functions: Move functions for the plane, refueling function to fill the plane with gasoline and passagers loading function to board the passangers inside the plane.

// Pseudocode
// We need to create 3 objects:
// Plane : properties : name, passsangers initialize to false, fuel initialize to false
// Passangers: properties: number, location initialized to "terminal" and destination
// Fuel: properties: amount of availale lb of fuel.
// move function:
      // need to create two variables one for latertal movement and onether one for vertical movement
      // - position left , position botttom and initialized to the possition of where the plane will appear
      // keycode = 39 for left, 37 for right, 38 for up and 40 for down, create flow control so that when one of
      // those keys is press it updates the left or bottom properties of plane.
// Refueling function:
      // when call it should updated the fuel property of plane from false to the quantity of fuel available in
      // fuel station. to this it ask the user to confirm if thay want to refuel if true , it fuel the plane.
// boarding function:
      // it works the same as the refueling function, but it updated the passanger property of plnae from false
      // to the number of passagers waiting in the terminal
//
//

// Initial Code

var plane = {
  name: "747-400",
  passangers: false,
  fuel: false
};

var passangers = {
  number: 300,
  location: "terminal",
  destination: "Cancun"
  x: 250,
  y: 90
};

var fuel = {
  lb: 100000,
  x: 126,
  y: 56
};

var positionLeft = 250;
var positionBottom = 0;

function move(e) {
  if (e.keyCode === 39) {
    if (positionLeft < 450) {
      positionLeft += 30;
      planeIcon.style.left = positionLeft + "px";
    }
  }
  if (e.keyCode === 37) {
    if (positionLeft > 25) {
      positionLeft -= 30;
      planeIcon.style.left = positionLeft + "px";
    }
  }
  if (e.keyCode === 38) {
    if (positionBottom < 220) {
      positionBottom += 30;
      planeIcon.style.bottom = positionBottom + "px";
    }
  }
  if (e.keyCode === 40) {
    if (positionBottom > 0) {
      positionBottom -= 30;
      planeIcon.style.bottom = positionBottom  + "px";
    }
  }
  refueling();
};

//document.onkeydown = move;

var refueling = function() {
  if (( fuel.x - 15 <= positionLeft) && (fuel.y - 15 <= positionBottom) && ( fuel.x - 15 >= positionLeft) && (fuel.y - 15 >= positionBottom)) {
    var refuel = confirm("Do you want to refuel");
    plane.fuel = fuel.lb;
  }
};

var boarding = function () {
  confirm("ready to board passangers")
}

boarding()






// Refactored Code

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Airport Game</title>

</head>
<body>
  <h1>Welcome to the Airport Game</h1>
  <p>Your goal is to take your passangers to Cancun!, for that you will need the tower to give you clearance for takeoff <br> The only way for the tower to clear you for takeoof is that you first pickup your passangers and then<br> fill your tanks with fuel. You will win once you are in Cancun!</p>
  <div id="airport">
    <div id="plane">
    </div>
    <div id="fuel">
    </div>
    <div id="passangers">
    </div>
  </div>
  <style>
    body {
      margin: 0;
      padding: 0;
      text-align: justify;
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
      color: white;
      }
    h1 {
      text-align: center;
    }
    #airport {
      margin: 0 auto;
      width: 500px;
      height: 320px;
      border: 4px solid black;
      padding: 0-auto;
      position: relative;
      background-image: url("http://img.brothergames.com/v2/android/screenshots/98/airport_craziness_59298_1.jpeg");
    }
    #plane {
     position: absolute;
     height:30px;
     width: 30px;
     background-image: url("http://www.popularmechanics.com/cm/popularmechanics/images/zG/airplane-icon-30.jpg");
     left: 250px;
     bottom: 0px;
    }

    #passangers {
     position: absolute;
     height:30px;
     width: 30px;
     background-image: url("https://fortress.wa.gov/parks/apps/aor-edit/icons/a_ToiletIcon.gif");
     left: 250px;
     bottom: 60px;
    }

    #fuel {
     position: absolute;
     height:40px;
     width: 40px;
     background-image: url("http://tips.slaw.ca/wp-content/uploads/2014/01/GasCap.jpg");
     left: 126px;
     bottom: 56px;
    }
  </style>
  <script>
      var airport = document.getElementById("airport");
      var planeIcon = document.getElementById("plane");
      var passangers = document.getElementById("passangers");
      var fuel = document.getElementById("fuel");

      var plane = {
        name: "747-400",
        passangers: false,
        fuel: false,
        takeoff: false
      };

      var passangers = {
        number: 300,
        location: "terminal",
        destination: "Cancun",
        x:250,
        y:60
      };

      var fuel = {
        lb: 100000,
        x: 130,
        y: 60
      };

      var runway = {
        x:160,
        y:240
      };

      var positionLeft = 250;
      var positionBottom = 0;

      function move(e) {
        if (e.keyCode === 39) {
          if (positionLeft < 450) {
            positionLeft += 30;
            planeIcon.style.left = positionLeft + "px";
          }
        }
        if (e.keyCode === 37) {
          if (positionLeft > 25) {
            positionLeft -= 30;
            planeIcon.style.left = positionLeft + "px";
          }
        }
        if (e.keyCode === 38) {
          if (positionBottom < 220) {
            positionBottom += 30;
            planeIcon.style.bottom = positionBottom + "px";
          }
        }
        if (e.keyCode === 40) {
          if (positionBottom > 0) {
            positionBottom -= 30;
            planeIcon.style.bottom = positionBottom  + "px";
          }
        }
        refueling();
        boarding();
        takeoff();
        tower();
      };

      document.onkeydown = move;

      var refueling = function() {
        if (( fuel.x == positionLeft) && (fuel.y == positionBottom)) {
          var refuel = confirm("Do you want to refuel?");
          if (refuel) {
            plane.fuel = fuel.lb;
            alert("Your plane has full tanks")
          }

        }
      };

      var boarding = function() {
        if (( passangers.x == positionLeft) && (passangers.y == positionBottom)) {
          var boarding = confirm("Plane Ready for boarding?");
          if (boarding) {
            plane.passangers = passangers.number;
            alert("Passangers are ready for departure");
          }
        }
      };

      var tower = function() {
        if ((plane.passangers > 0) && (plane.fuel > 0)) {
          if(plane.takeoff == false) {
            alert("You are ready for takeoff please go to runway 02R");
            plane.takeoff = true;
          }
        }
      };


      var takeoff = function() {
        if ((runway.x == positionLeft) && (runway.y == positionBottom)) {
          if ((plane.passangers > 0) && (plane.fuel > 0)){
            alert("Clear for Takeoff")
            airport.style["background-image"] = "url('http://www.nucarrentals.com/images/locations/mexico_cancun.jpg')";
            airport.style["background-repeat"] = "no-repeat";
            airport.style["background-size"] = "500px 320px";
          }
          else {
            alert("You are NOT clear for takeoff")
          }
        }
      };

   </script>
  </body>
</html>






// Reflection
//What a fun challenge , it really motivate me to try new things and push me harder. I learn a lot of thigs from
//this challenge like, how to change DOM objects using JS, also how to create functions that modified JS objects
//properties: IM sure that i spend more time that i have should working on this , and the result is far from
//wht i initially desired, but still i think i made good progress and learn lot of things from this. There was
//lots of thigs that i added to the code that i thought after making the pseudocode so thay are not reflected
//there , so this really is making me question my ability to make good pseudocode i think that i can improve
//a lot in that aspect.
//