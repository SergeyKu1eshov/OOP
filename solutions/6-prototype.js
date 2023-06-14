// BEGIN
export default class Money {
  rates = {
    usd: { eur: 0.7, usd: 1 },
    eur: { usd: 1.2, eur: 1 },
  };

  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }

  getValue() {
    return this.value;
  }

  getCurrency() {
    return this.currency;
  }

  exchangeTo(currency) {
    const newValue = this.value * this.rates[this.currency][currency];
    return new Money(newValue, currency);
  }

  add(money) {
    if (money.getCurrency() !== this.currency) {
      const newMoney = money.exchangeTo(this.currency);
      return new Money(this.value + newMoney.getValue(), this.currency);
    }

    return new Money(this.value + money.getValue(), this.currency);
  }

  format() {
    const formatOptions = {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat('en-US', formatOptions).format(this.value);
  }
}
// END
