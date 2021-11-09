import './App.css';
 
export default function coinCounter(change, changeArray, counter) {
  console.log("Change: " + change);
  const denominations = [.25, .10, .05, .01];
  // const denominations = [25, 10, 5, 1];
  // const changeRounded = parseInt((change * 100).toFixed(0));
  // console.log("changeRounded: " + changeRounded);
  // console.log("changeRounded: " + typeof changeRounded);
  // console.log("change: " + typeof change);
  
  let incCounter = counter + 1;
  
  if (isNaN(change) || change === 0) {
    return "is not a number";
  } 
  else {
    if (change >= denominations[counter]) {
      if (denominations[counter] === .01) {
        changeArray[counter] = (Math.round(change / denominations[counter]));
      } 
      else {
        // changeArray[counter] = (changeRounded / denominations[counter]);
        changeArray[counter] = (Math.floor(change / denominations[counter]));
      }
      return coinCounter((change % denominations[counter]), changeArray, incCounter);
    }
    else if (counter <= denominations.Length) {
      return coinCounter(change, changeArray, incCounter)
    }

    return `quarters: ${changeArray[0]}, dimes: ${changeArray[1]}, nickels: ${changeArray[2]}, pennies: ${changeArray[3]}`;
  }
}
        