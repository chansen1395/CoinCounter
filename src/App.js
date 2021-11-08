import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">

  //     </header>
  //   </div>
  // );

  
  export default function coinCounter(change) {
    let changeArray = [];
    if (isNaN(change) || change === 0) {
      return "is not a number";
    } 
    else {
      // if (change >= .10) {
      //   changeArray.push(change / .10);
      //   change = change % .10;
      //   return coinCounter(change);
      // }
      // if (change >= .05) {
      //   changeArray.push(change / .05);
      //   change = change % .05;
      //   return coinCounter(change);
      // }
      if (change >= .01) {
        changeArray.push( Math.floor(change / .01));
      }
      return changeArray;
    }
    



    // return "test";
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
// export default coinCounter;
