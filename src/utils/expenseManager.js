let expenses = [];

export const addExpense = (expense) => {
  expenses.push(expense);
  console.log('Dépense ajoutée:', expense);
  console.log('Toutes les dépenses:', expenses);
};

export const getExpenses = () => {
  return expenses;
};

export const getRecentExpenses = (startDate, endDate) => {
  return expenses.filter(expense => 
    expense.date >= startDate && expense.date <= endDate
  );
};