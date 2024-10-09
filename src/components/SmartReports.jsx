import React from 'react';
import { getExpenses } from '../utils/expenseManager';
import { categories } from '../utils/expenseCategories';

function SmartReports() {
  const expenses = getExpenses();

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const getCategoryPercentages = () => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    const total = getTotalExpenses();
    return Object.entries(categoryTotals).map(([category, amount]) => ({
      category,
      percentage: ((amount / total) * 100).toFixed(2)
    }));
  };

  const getTopExpenseCategories = (limit = 3) => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    return Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  };

  return (
    <div>
      <h2>Rapports intelligents</h2>
      {expenses.length === 0 ? (
        <p>Aucune dépense enregistrée pour générer des rapports.</p>
      ) : (
        <>
          <h3>Total des dépenses</h3>
          <p>{getTotalExpenses().toFixed(2)}€</p>

          <h3>Répartition des dépenses par catégorie</h3>
          <ul>
            {getCategoryPercentages().map(({ category, percentage }) => (
              <li key={category}>{category}: {percentage}%</li>
            ))}
          </ul>

          <h3>Top 3 des catégories de dépenses</h3>
          <ol>
            {getTopExpenseCategories().map(([category, amount]) => (
              <li key={category}>{category}: {amount.toFixed(2)}€</li>
            ))}
          </ol>

          <h3>Conseils</h3>
          <ul>
            {getTopExpenseCategories().map(([category, amount]) => {
              const categoryInfo = categories.find(c => c.name === category);
              if (categoryInfo && categoryInfo.budgetTip) {
                return <li key={category}>{categoryInfo.budgetTip}</li>;
              }
              return null;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default SmartReports;