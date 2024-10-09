import React, { useState, useEffect } from 'react';
import { getLoyaltyCards, addLoyaltyCard, deleteLoyaltyCard } from '../utils/loyaltyCardManager';

function LoyaltyCards() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ name: '', number: '', expiryDate: '' });

  useEffect(() => {
    setCards(getLoyaltyCards());
  }, []);

  const handleAddCard = (e) => {
    e.preventDefault();
    addLoyaltyCard(newCard);
    setCards(getLoyaltyCards());
    setNewCard({ name: '', number: '', expiryDate: '' });
  };

  const handleDeleteCard = (index) => {
    deleteLoyaltyCard(index);
    setCards(getLoyaltyCards());
  };

  return (
    <div>
      <h2>Mes cartes de fidélité</h2>
      <form onSubmit={handleAddCard}>
        <input
          type="text"
          placeholder="Nom du programme"
          value={newCard.name}
          onChange={(e) => setNewCard({...newCard, name: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Numéro de carte"
          value={newCard.number}
          onChange={(e) => setNewCard({...newCard, number: e.target.value})}
          required
        />
        <input
          type="date"
          placeholder="Date d'expiration"
          value={newCard.expiryDate}
          onChange={(e) => setNewCard({...newCard, expiryDate: e.target.value})}
        />
        <button type="submit">Ajouter une carte</button>
      </form>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            {card.name} - {card.number} 
            {card.expiryDate && ` (Expire le ${new Date(card.expiryDate).toLocaleDateString()})`}
            <button onClick={() => handleDeleteCard(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoyaltyCards;