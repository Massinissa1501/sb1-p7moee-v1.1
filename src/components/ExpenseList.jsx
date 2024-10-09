import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

function ExpenseList() {
  const { expenses } = useExpenses();

  return (
    <div>
      <h2>Liste des dépenses</h2>
      {expenses.length === 0 ? (
        <p>Aucune dépense enregistrée.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.amount}€ - {expense.category} 
              {expense.subcategory && `(${expense.subcategory})`} - {expense.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;