import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const useExpenses = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(['Alimentation', 'Transport', 'Logement', 'Loisirs']);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, categories, addCategory }}>
      {children}
    </ExpenseContext.Provider>
  );
};