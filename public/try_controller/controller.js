/*
GAMPAD MODE - FUNCTION+B
Button 0 - B
Button 1 - D
Button 3 - C
Button 4 - A

Joystick Down - [1,0]
Joystick Up - [-1,0]
Joystick Right - [0,-1]
Joystick Left - [0,1]


*/


var ticking = false;
var prevTimestamp = 0;
var connected = false;
var state = {}
    

/**
 * Starts a polling loop to check for gamepad state.
 */
function startPolling() {
    // Don't accidentally start a second loop, man.
    if (!ticking) { 
      ticking = true;
      tick();
    }
}
  
/**
 * Stops a polling loop by setting a flag which will prevent the next
 * requestAnimationFrame() from being scheduled.
 */
function stopPolling() {
    ticking = false;
}
  
/**
 * A function called with each requestAnimationFrame(). Polls the gamepad
 * status and schedules another poll.
 */  
function tick() {
  pollStatus();
  scheduleNextTick();
}
  

function scheduleNextTick() {
  // Only schedule the next frame if we haven't decided to stop via
  // stopPolling() before.
  if (ticking) {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(tick);
    } else if (window.mozRequestAnimationFrame) {
      window.mozRequestAnimationFrame(tick);
    } else if (window.webkitRequestAnimationFrame) {
      window.webkitRequestAnimationFrame(tick);
    }
    // Note lack of setTimeout since all the browsers that support
    // Gamepad API are already supporting requestAnimationFrame().
  }    
}
  
/**
 * Checks for the gamepad status. Monitors the necessary data and notices
 * the differences from previous state (buttons for Chrome/Firefox, 
 * new connects/disconnects for Chrome). If differences are noticed, asks 
 * to update the display accordingly. Should run as close to 60 frames per 
 * second as possible.
 */
function pollStatus() {
  // (Code goes here.)
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  
  for (var i = 0; i < gamepads.length; i++) {
      var gamepad = gamepads[i];
      if (gamepad) {
          document.getElementById("gamepad-info").innerHTML = "Gamepad connected at index " + gamepad.index + ": " + gamepad.id +
          ". It has " + gamepad.buttons.length + " buttons and " + gamepad.axes.length + " axes.";
        break;
      }
    }

  // const gamepad = gamepads[0]
  if (!gamepad || !connected) {
      if (!gamepad && !connected) {return}
      if (gamepad && !connected) {connected = true; alert("Gampad connected")}
      if (!gamepad && connected) {connected = false; alert("Gampad signal lost")}
      return;
  }

  if (gamepad.timestamp == prevTimestamp) {
    return;
  }

  prevTimestamp = gamepad.timestamp;
  if (gamepad == state) {return}

  state = gamepad;
  console.log(gamepad.axes, gamepad.buttons);
  let buttons = [];
  gamepad.buttons.forEach((value, index) => {
      buttons.push(value.pressed)
  });
  alert(gamepad.axes+buttons)

}







