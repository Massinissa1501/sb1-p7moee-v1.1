// Simulons un stockage local pour les budgets
let budgets = {};

export const setBudget = (category, amount) => {
  budgets[category] = amount;
};

export const getBudget = (category) => {
  return budgets[category] || 0;
};

export const getAllBudgets = () => {
  return budgets;
};

export const calculateBudgetStatus = (category, spent) => {
  const budget = getBudget(category);
  const remaining = budget - spent;
  const percentage = budget > 0 ? (spent / budget) * 100 : 0;
  
  return {
    budget,
    spent,
    remaining,
    percentage
  };
};