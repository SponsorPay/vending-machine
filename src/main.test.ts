import {BasicVendingMachine, Coin} from './main'

test('the data is peanut butter', () => {
  expect(1).toBe(1)
});

test('Vending machine has an initial state of zero coins', () => {
  expect(new BasicVendingMachine().coinCounter).toBe(0)
});

test('Vending machine increments coin count', () => {
  let vending = new BasicVendingMachine()
  vending.insertCoin(Coin.ONE_CENT)
  vending.insertCoin(Coin.ONE_CENT)
  expect(vending.coinCounter).toBe(1)
});

