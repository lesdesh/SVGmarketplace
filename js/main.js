//this is a self - invoking anonymous function
//its called the module pattern
(() => {
  console.log('this is some text');
  //go into the document and make a reference to an element that you want to work with
  let theHeader = document.querySelector('#main-header');
//create a function that runs when theheader element is clicked
  function logElement() {
    console.log('clicked on an element!');
  }
  
  //listen for a user event, and then do something
  // the "do something" is the function we run when the element is clicked
  theHeader.addEventListener("click", logElement);
})();
