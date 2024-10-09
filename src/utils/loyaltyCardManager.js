let loyaltyCards = JSON.parse(localStorage.getItem('loyaltyCards')) || [];

export const getLoyaltyCards = () => {
  return loyaltyCards;
};

export const addLoyaltyCard = (card) => {
  loyaltyCards.push(card);
  localStorage.setItem('loyaltyCards', JSON.stringify(loyaltyCards));
};

export const deleteLoyaltyCard = (index) => {
  loyaltyCards.splice(index, 1);
  localStorage.setItem('loyaltyCards', JSON.stringify(loyaltyCards));
};

export const updateLoyaltyCard = (index, updatedCard) => {
  loyaltyCards[index] = updatedCard;
  localStorage.setItem('loyaltyCards', JSON.stringify(loyaltyCards));
};