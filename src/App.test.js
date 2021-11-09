// import { render, screen } from '@testing-library/react';
// import App from './App';
import coinCounter from './App';
import coinCounter2 from './App';
import {multiplier} from './App';
import {doubler} from './App';
import {tripler} from './App';
import {quadrupler} from './App';

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

describe ('coinCounter2', () => {

  // let reusableCoinCounter;
  // const changeArray = [0,0,0,0];
  // const changeArray = [
  // {'quarters: '0,0,0,0];
  //
  //
  //
  //
  // beforeEach(() => {
  //   reusableCoinCounter = coinCounter(.67, changeArray, 0);
  // });

  test('It should correctly give the change for given amount', () => {
    expect(coinCounter2(.07)).toEqual("nickels: 1 pennies: 2");
  })

});


describe ('multiplier', () => {

  test('It should correctly give the change for given amount', () => {
    expect(doubler(2)).toEqual(4);
  })

  test('It should correctly give the change for given amount', () => {
    expect(tripler(2)).toEqual(6);
  })

  test('It should correctly give the change for given amount', () => {
    expect(quadrupler(2)).toEqual(8);
  })

});
