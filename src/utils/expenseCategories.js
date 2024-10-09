export const categories = [
  { name: 'Alimentation', keywords: ['supermarché', 'restaurant', 'épicerie'] },
  { name: 'Transport', keywords: ['essence', 'bus', 'train', 'taxi'] },
  { name: 'Logement', keywords: ['loyer', 'électricité', 'eau', 'gaz'] },
  { name: 'Loisirs', keywords: ['cinéma', 'concert', 'livre', 'jeu'] },
  { name: 'Santé', keywords: ['pharmacie', 'médecin', 'hôpital'] },
  // Ajoutez d'autres catégories selon vos besoins
];

export function categorizeExpense(description) {
  const lowercaseDescription = description.toLowerCase();
  for (const category of categories) {
    if (category.keywords.some(keyword => lowercaseDescription.includes(keyword))) {
      return category.name;
    }
  }
  return 'Autre';
}