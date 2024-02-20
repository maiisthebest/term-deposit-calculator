import { calculateTermDeposit } from "./script";

describe("calculateTermDeposit()", () => {
  it.each`
    deposit    | interestRatePercent | investmentTermInMonths | interestPaidFrequency | expectedBalance
    ${1000}    | ${0}                | ${3}                   | ${"Monthly"}          | ${1000}
    ${10000}   | ${1.1}              | ${36}                  | ${"Monthly"}          | ${10335}
    ${10000}   | ${1.1}              | ${36}                  | ${"Quarterly"}        | ${10335}
    ${10000}   | ${1.1}              | ${36}                  | ${"Annually"}         | ${10334}
    ${10000}   | ${1.1}              | ${36}                  | ${"AtMaturity"}       | ${10330}
    ${1500000} | ${0.1}              | ${60}                  | ${"AtMaturity"}       | ${1507500}
  `(
    "should return the balance $expectedBalance given deposit $deposit interestRatePercent $interestRatePercent investmentTermInMonths $investmentTermInMonths interestPaidFrequency $interestPaidFrequency",
    ({
      deposit,
      interestRatePercent,
      investmentTermInMonths,
      interestPaidFrequency,
      expectedBalance,
    }) => {
      expect(
        calculateTermDeposit(
          deposit,
          interestRatePercent,
          investmentTermInMonths,
          interestPaidFrequency
        )
      ).toBe(expectedBalance);
    }
  );
});
