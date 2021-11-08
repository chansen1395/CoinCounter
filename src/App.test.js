import { render, screen } from '@testing-library/react';
import App from './App';
import coinCounter from './App';

describe ('coinCounter', () => {
  let coinCounter;
  test('It should correctly give the change for given amount', () => {
    expect(coinCounter(.17)).toEqual([1, 1, 2]);
  })
});
