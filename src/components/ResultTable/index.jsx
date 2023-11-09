import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export default function ResultTable({ data, initialInvest }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear -
                    initialInvest -
                    item.yearlyContribution * item.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvest +
                    initialInvest -
                    item.yearlyContribution * item.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
