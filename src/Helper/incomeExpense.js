export default function incomeExpense(data) {
  let incomeData = data
    .filter((dat) => !dat.isExpense)
    .reduce((acc, dat) => acc + Number.parseInt(dat.amount), 0);
  let expenseData = data
    .filter((dat) => dat.isExpense)
    .reduce((acc, dat) => acc + Number.parseInt(dat.amount), 0);
  return {
    incomeData: incomeData,
    expenseData: expenseData,
  };
}
