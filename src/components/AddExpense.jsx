import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

function AddExpense() {
  const { addExpense, categories, addCategory } = useExpenses();
  const [expense, setExpense] = useState({ amount: '', category: '', subcategory: '', date: '' });
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ amount: '', category: '', subcategory: '', date: '' });
  };

  const handleAddCategory = () => {
    if (newCategory) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div>
      <h2>Ajouter une dépense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Montant"
          value={expense.amount}
          onChange={(e) => setExpense({...expense, amount: e.target.value})}
          required
        />
        <select
          value={expense.category}
          onChange={(e) => setExpense({...expense, category: e.target.value})}
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Sous-catégorie"
          value={expense.subcategory}
          onChange={(e) => setExpense({...expense, subcategory: e.target.value})}
        />
        <input
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({...expense, date: e.target.value})}
          required
        />
        <button type="submit">Ajouter la dépense</button>
      </form>

      <h3>Ajouter une nouvelle catégorie</h3>
      <input
        type="text"
        placeholder="Nouvelle catégorie"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Ajouter la catégorie</button>
    </div>
  );
}

export default AddExpense;