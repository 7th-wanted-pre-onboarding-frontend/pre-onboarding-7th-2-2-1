class TrendBanner {
  constructor({ imp, click, cost, roas, conv, amount, diffDate }) {
    this.imp = imp;
    this.click = click;
    this.conv = conv;
    this.cost = cost;
    this.roas = this.#convertRoas(roas, diffDate);
    this.amount = amount;
    this.diffDate = diffDate;
  }

  #convertRoas(roas, diffDate) {
    return Math.round(roas / diffDate) || 0;
  }

  getEntreis() {
    return [this.roas, this.cost, this.imp, this.click, this.conv, this.amount];
  }
}

export default TrendBanner;
