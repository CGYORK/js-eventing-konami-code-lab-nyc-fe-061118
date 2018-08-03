const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
const body = document.getElementById("CheatCode");

$("#CheatCode").on('keydown', init)
body.addEventListern('keydown', init)

function init(e) {
  // Write your JavaScript code inside the init() function
    const key = parseInt(e.detail || e.which || e.locaiton);
    if (key === code[index]) {
      index++;
      if (index === code.length){
        alert("Don't cheat! Play the game like a man.");
      }
    } else {
      index = 0; 
    }
}