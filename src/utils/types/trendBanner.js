class TrendBanner {
  constructor({ imp, click, cost, roas, conv, amount, diffDate }) {
    this.imp = this.#convertAvg(imp, diffDate);
    this.click = this.#convertAvg(click, diffDate);
    this.conv = this.#convertAvg(conv, diffDate);
    this.cost = this.#convertAvg(cost, diffDate);
    this.roas = this.#convertAvg(roas, diffDate);
    this.amount = this.#convertAvg(amount, diffDate);
    this.diffDate = diffDate;
  }

  #convertAvg(value, diffDate) {
    return Math.round(value / diffDate) || 0;
  }

  getEntreis() {
    return [this.roas, this.cost, this.imp, this.click, this.conv, this.amount];
  }
}

export default TrendBanner;
