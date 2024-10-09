import React from 'react';
import { calculateBudgetStatus } from '../utils/budgetManager';

function BudgetStatus({ category, spent }) {
  const status = calculateBudgetStatus(category, spent);

  return (
    <div>
      <h3>Statut du budget pour {category}</h3>
      <p>Budget: {status.budget}€</p>
      <p>Dépensé: {status.spent}€</p>
      <p>Restant: {status.remaining}€</p>
      <div style={{
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
      }}>
        <div style={{
          width: `${Math.min(status.percentage, 100)}%`,
          backgroundColor: status.percentage > 100 ? 'red' : '#4caf50',
          height: '20px',
          borderRadius: '5px',
          transition: 'width 0.5s ease-in-out',
        }}></div>
      </div>
      <p>{status.percentage.toFixed(2)}% du budget utilisé</p>
    </div>
  );
}

export default BudgetStatus;