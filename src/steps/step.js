const step1 = {
  // Use Components from step 9. pass a prop to the span in header component. should be Fresh Seafood Market.
};
const step2 = {
  // Make header a function Component
};
const step3 = {
  // Video 9
  // Create a router component. Need to inject import BrowserRouter, Route, Switch. It's a functional component.
  // Need to mount the Router
  // Import the components
  // Make a NotFound Component. Functional Component
};
const step4 = {
  // Video 10
  // Add the helper function to randomly assign the storepicker name
};
const step5 = {
  //Video 11 / 12
  // In store Picker add a function called goToStore attached to button. Get the info from the input. use React.createRef();
  // Use the push keyword to move to the store
};
const step6 = {
  // Video 13
  // Make a Component called AddFishForm. It is a component of inventory - Need to make a form with className of "fish-edit"
  // name:
  // price:
  // status: A Select
  // desc:    A textArea
  // image:
  // And a submit button
  // Make a function called createFish. Need to make references for the inputs.
  // Set state in the App component. Make a empty fishes and orders object. Make a method in App called addFish. Pass the data from AddFishForm to app. Fishes state should be updated. Reset the form after adding fish.
};
const step7 = {
  //Video 14
  // In inventory add button Loads Sample Fishes / Function loadSampleFishes which
  // there is a file called sample fishes.
  // update the fishes in the file to state
};
const step8 = {
  // Video 15
  // Display the fishes. Need to make a class component called Fish.js. Make a <li> with class name of "menu-fish"
  // in App JS make a <ul> and give it a class of fishes
  // Need to use Object.keys() to loop over the <li>
  // pass fishes down to the Fish component and make sure to give a key.
  // Make a button called Add To Cart
};
const step9 = {
  // Video 16
  // In fish component need to 'disabled' the button based on status if available or not
  // Use a tenary operator when the button is clicked.
  // Add a function to add fishes to the order called addToOrder steps 1. take copy of state. 2. Either add to the order or update the number in our order. 3. call setState to update state.
  // Hook the button to the addToOrder funtion in fish.js. need to pass down the index to the Fish component for the addToOrder function.
  // make an anoymous inline function on the button
};
const step10 = {
  // Video 17
  // go to Order component and give classname of "order-wrap" to the div. Then a h2 of order. need an unorderlist.
  // Need to pass fishes and the order to the Order component
  // Diplay the total of the order. First get the order ids. Then use a reduce function. -complicated- Wrap the total in the helper function.
  // Display the orderId in a <ul> *need a map function
  // make a renderOrder function for <li> credaed above. display the pounds/ fish name and fish total in this li.
  // need to make a check first to see if it's available.
  // add a classname to the <ul> of order. Need to add a key.
};
