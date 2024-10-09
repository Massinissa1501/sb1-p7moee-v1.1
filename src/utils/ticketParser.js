import { parse } from 'date-fns';
import { categorizeExpense } from './expenseCategories';

export function parseTicketText(text) {
  const lines = text.split('\n');
  let amount = 0;
  let date = new Date();
  let description = '';

  for (const line of lines) {
    // Cherche un montant total
    const totalMatch = line.match(/total:?\s*(\d+[.,]\d{2})/i);
    if (totalMatch) {
      amount = parseFloat(totalMatch[1].replace(',', '.'));
    }

    // Cherche une date
    const dateMatch = line.match(/(\d{2}[/-]\d{2}[/-]\d{2,4})/);
    if (dateMatch) {
      date = parse(dateMatch[1], 'dd/MM/yyyy', new Date());
    }

    // Ajoute chaque ligne à la description
    description += line + ' ';
  }

  const category = categorizeExpense(description);

  return { amount, date, category, description: description.trim() };
}