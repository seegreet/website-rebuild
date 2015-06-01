//Select the button
var anchor = document.querySelectorAll('button');
//Whether or not the navigation is open
var open = false;

//For each click on the button
[].forEach.call(anchor, function(anchor){
  anchor.onclick = function(event){
    event.preventDefault();

    //If the button is closed
    if(!open){

      open = true;
      this.classList.add('close'); //transform the button
      document.getElementById("sidebar").style.transform = "translate3d(0,0,0)"; //open the navigation
      document.getElementById("overlay").style.display = "block"; //display the overlay

    }

    //If the button is open
    else{

      open = false;
      this.classList.remove('close'); //transform the button
      document.getElementById("sidebar").style.transform = "translate3d(-300px,0,0)"; //close the navigation
      document.getElementById("overlay").style.display = "none"; //close the overlay

    }
  }
});