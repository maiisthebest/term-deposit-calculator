export function calculateTermDeposit(
  deposit,
  interestRatePercent,
  termInMonths,
  interestPaidFrequency
) {
  const interestRateDecimal = interestRatePercent / 100;
  const termInYears = termInMonths / 12;
  const compoundedTerm =
    interestPaidFrequency === "Monthly"
      ? 12
      : interestPaidFrequency === "Quarterly"
      ? 4
      : interestPaidFrequency === "Annually"
      ? 1
      : 0;

  let balance;

  if (compoundedTerm > 0)
    balance =
      deposit *
      Math.pow(
        1 + interestRateDecimal / compoundedTerm,
        termInYears * compoundedTerm
      );
  else balance = deposit + deposit * interestRateDecimal * termInYears;

  return Math.round(balance);
}
