class Trend {
  constructor({
    imp,
    click,
    cost,
    convValue,
    roas,
    date,
    conv,
    ctr,
    cpc,
    cpa
  }) {
    this.imp = imp;
    this.click = click;
    this.cost = cost;
    this.convValue = convValue;
    this.roas = this.#convertRoas(roas);
    this.amount = this.#convertAmount(roas, cost);
    this.date = date;
    this.conv = conv;
    this.ctr = ctr;
    this.cpc = cpc;
    this.cpa = cpa;
  }

  #convertRoas(roas) {
    return Math.round(roas);
  }

  #convertAmount(roas, cost) {
    return Math.round(roas * cost * 0.01);
  }
}

export default Trend;
