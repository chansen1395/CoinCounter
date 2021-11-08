import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">

  //     </header>
  //   </div>
  // );

  // const coinCounter = (change) => {
  function coinCounter(change) {
    let changeArray = [];
    if (isNaN(change) || change === 0) {
      return;
    } else {
      if (change >= .10) {
        changeArray.push(change / .10);
        changeRemaining = change % .10;
        return coinCounter(changeRemaining);
      }
      if (change >= .05) {
        changeArray.push(change / .05);
        changeRemaining = change % .05;
        return coinCounter(changeRemaining);
      }
      if (change >= .01) {
        changeArray.push(change / .01);
        return changeArray;
      }
  
    }
    // return changeArray;
    return "test";
    // return `dimes: ${changeArray[0]} nickels: ${changeArray[1]} pennies: ${changeArray[2]}`;
    // possibly an array of coins?
    // change =7
    // if % 25
    // if % 10
    // if % 5
      // return const numNickels = change / 5;
    // if % 1
  }
// }


// export coinCounter;
// export default App;
export default coinCounter;
