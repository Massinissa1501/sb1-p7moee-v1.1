import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue dans votre gestionnaire de dépenses</h1>
      <nav>
        <ul>
          <li><Link to="/add">Ajouter une dépense</Link></li>
          <li><Link to="/list">Voir les dépenses</Link></li>
          <li><Link to="/chart">Graphiques</Link></li>
          <li><Link to="/scan">Scanner un ticket</Link></li>
          <li><Link to="/reports">Rapports intelligents</Link></li>
          <li><Link to="/backup">Sauvegarde et restauration</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;