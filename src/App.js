import './App.css';
 
export default function coinCounter(change, changeArray, counter) {
  const denominations = [.25, .10, .05, .01];
  let incCounter = counter + 1;
  console.log("Counter: " + counter + ", Counter++: " + incCounter);
  console.log("changearray: " + changeArray[counter]);
  console.log("denomsarray: " + denominations[counter]);

  if (isNaN(change) || change === 0) {
    return "is not a number";
  } 
  else {
    if (change >= denominations[counter]) {
      if (denominations[counter] === .01) {
        changeArray[counter] = (Math.round(change / denominations[counter]));
      } 
      else {
        changeArray[counter] = (Math.floor(change / denominations[counter]));
      }
      return coinCounter((change % denominations[counter]), changeArray, incCounter);
    }
    else if (counter <= 3) {
      return coinCounter(change, changeArray, incCounter)
    }

    return `quarters: ${changeArray[0]}, dimes: ${changeArray[1]}, nickels: ${changeArray[2]}, pennies: ${changeArray[3]}`;
  }
}
        