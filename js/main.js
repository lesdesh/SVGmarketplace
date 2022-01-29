//this is a self - invoking anonymous function
//its called the module pattern
 
 
(() => {
  //go into the document and make a reference to an element that you want to work with
  let theHeading = document.querySelector(".main-heading");
      theIcons = document.querySelector(".icons");
 // debugger; //this is like a breakpoint/ pause point in your code
 
 
//create a function that runs when theheader element is clicked
  function logElement() {
    console.log('clicked on an element!', this.id);
  }
 
  //listen for a user event, and then do something
  // the "do something" is the function we run when the element is clicked
  theHeading.addEventListener("click", logElement);
  theIcons.forEach(addEventListener("click", logElement));
})();