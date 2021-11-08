// import { render, screen } from '@testing-library/react';
// import App from './App';
import coinCounter from './App';

describe ('coinCounter', () => {

  let reusableCoinCounter;
  const changeArray = [0,0,0,0];
  // const changeArray = [
  // {'quarters: '0,0,0,0];
  //
  //
  //
  //
  beforeEach(() => {
    reusableCoinCounter = coinCounter(.67, changeArray, 0);
  });

  test('It should return not a number', () => {
    expect(coinCounter("hello", changeArray, 0)).toEqual("is not a number");
  })

  test('It should correctly give the change for given amount', () => {
    expect(reusableCoinCounter).toEqual("quarters: 2, dimes: 1, nickels: 1, pennies: 2");
  })

});
