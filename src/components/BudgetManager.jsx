import React, { useState } from 'react';
import { setBudget, getBudget, getAllBudgets } from '../utils/budgetManager';
import { categories } from '../utils/expenseCategories';

function BudgetManager() {
  const [budgets, setBudgets] = useState(getAllBudgets());

  const handleBudgetChange = (category, amount) => {
    setBudget(category, parseFloat(amount));
    setBudgets(getAllBudgets());
  };

  return (
    <div>
      <h2>Gestion des Budgets</h2>
      {categories.map(category => (
        <div key={category.name}>
          <label htmlFor={`budget-${category.name}`}>{category.name}:</label>
          <input
            type="number"
            id={`budget-${category.name}`}
            value={getBudget(category.name)}
            onChange={(e) => handleBudgetChange(category.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default BudgetManager;