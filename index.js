let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

// Set Time
let time = document.getElementById('time'),
      greeting = document.getElementById('greeting');

const showAmPm = true;

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes();

let amPm = hour >= 12 ? 'PM' : 'AM';

hour = hour % 12 || 12;

time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${showAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour <12) {
    // Morning
    document.body.style.backgroundImage = "url('')";
    greeting.textContent = 'Good Morning';
  } else if(hour <18) {
    //Afternoon
    document.body.style.backgroundImage = "url('')";
    greeting.textContent = 'Good Afternoon';
  } else {
    //Evening
    document.body.style.backgroundImage = "url('')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}



showTime();
setBgGreet();
    