import convertDateFormat from './convertDateFormat';
import tenThousandFormatting from './tenThousandFormatting';

export default function makeAdvarCardArry(obj = {}, format = false) {
  const { status, startDate, budget, report } = obj;
  const { cost, roas, convValue } = report;

  if (!format) {
    return {
      status,
      startDate: convertDateFormat(startDate),
      budget: tenThousandFormatting(budget),
      roas: `${roas}%`,
      cost: tenThousandFormatting(cost),
      convValue: tenThousandFormatting(convValue)
    };
  }
  return {
    status,
    startDate: convertDateFormat(startDate),
    budget,
    roas,
    cost,
    convValue
  };
}
