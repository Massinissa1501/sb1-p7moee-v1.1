import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import LoyaltyCards from './components/LoyaltyCards';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
  return (
    <Router>
      <ExpenseProvider>
        <div className="App">
          <h2 className="welcome-text">Bienvenue dans votre gestionnaire de dépenses</h2>
          <nav>
            <div className="button-row">
              <Link to="/" className="button-3d">Accueil</Link>
              <Link to="/add" className="button-3d">Ajouter</Link>
            </div>
            <div className="button-row">
              <Link to="/list" className="button-3d">Liste</Link>
              <Link to="/chart" className="button-3d">Analyse</Link>
            </div>
            <div className="button-row">
              <Link to="/loyalty" className="button-3d">Cartes de fidélité</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<h3>Gérez vos dépenses facilement</h3>} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/list" element={<ExpenseList />} />
            <Route path="/chart" element={<ExpenseChart />} />
            <Route path="/loyalty" element={<LoyaltyCards />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </Router>
  );
}

export default App;