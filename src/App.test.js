// import { render, screen } from '@testing-library/react';
// import App from './App';
import coinCounter from './App';

describe ('coinCounter', () => {
  test('It should correctly give the change for given amount', () => {
    expect(coinCounter("hello")).toEqual("is not a number");
  })

  // test('It should correctly give the change for given amount', () => {
  //   expect(coinCounter("hello")).toEqual("is not a number");
  // })
});
