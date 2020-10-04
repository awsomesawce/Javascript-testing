// This is a javascript script to test my javascript!
let myButton = document.querySelector('#buttonOne');
let myHeading = document.querySelector('h1');
let myFooter = document.querySelector('footer');
let myButtonTwo = document.querySelector('#buttonTwo');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
function setFooter() {
  let variableOne = prompt('Set the footer');
  if(!variableOne) {
    setFooter();
  }
  else {
    localStorage.setItem('footer', variableOne);
    myFooter.innerHTML = 'Yo yo footer: ' + variableOne;
  }
}
myButton.onclick = function() {
  setUserName();
}
myButtonTwo.onclick = function() {
  setFooter();
}