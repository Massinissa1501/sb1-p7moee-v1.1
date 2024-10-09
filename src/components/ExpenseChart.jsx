import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useExpenses } from '../context/ExpenseContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ExpenseChart() {
  const { expenses } = useExpenses();

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Dépenses par catégorie',
        data: Object.values(categoryTotals),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Analyse des dépenses par catégorie',
      },
    },
  };

  return (
    <div>
      <h2>Analyse des dépenses</h2>
      <div style={{ height: '400px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ExpenseChart;