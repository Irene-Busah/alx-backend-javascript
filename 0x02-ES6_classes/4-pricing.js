import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter methods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency
  }

  // Setter methods
  set amount(newAmount) {
    this._amount = newAmount;
  }

  set currency(newCurrent) {
    this._currency = newCurrent;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
};
