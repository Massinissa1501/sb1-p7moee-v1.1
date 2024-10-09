import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';
import { parseTicketText } from '../utils/ticketParser';
import { addExpense } from '../utils/expenseManager';

function TicketScanner() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [expense, setExpense] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setError('');
  };

  const scanTicket = async () => {
    if (!image) {
      setError('Veuillez d\'abord sélectionner une image.');
      return;
    }

    setIsScanning(true);
    setError('');
    setText('');
    setExpense(null);

    try {
      const worker = await createWorker('fra');
      const { data: { text } } = await worker.recognize(image);
      setText(text);
      console.log('Texte extrait:', text);

      const parsedExpense = parseTicketText(text);
      console.log('Dépense analysée:', parsedExpense);
      setExpense(parsedExpense);

      await worker.terminate();
    } catch (error) {
      console.error('Erreur lors du scan du ticket:', error);
      setError('Une erreur est survenue lors du scan du ticket. Veuillez réessayer.');
    } finally {
      setIsScanning(false);
    }
  };

  const saveExpense = () => {
    if (expense && expense.amount > 0) {
      addExpense(expense);
      alert('Dépense ajoutée avec succès !');
      setImage(null);
      setText('');
      setExpense(null);
    } else {
      setError('Impossible d\'enregistrer la dépense. Veuillez réessayer le scan.');
    }
  };

  return (
    <div>
      <h2>Scanner un ticket</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={scanTicket} disabled={isScanning}>
        {isScanning ? 'Scan en cours...' : 'Scanner le ticket'}
      </button>

      {text && (
        <div>
          <h3>Texte extrait :</h3>
          <pre>{text}</pre>
        </div>
      )}

      {expense && (
        <div>
          <h3>Dépense détectée :</h3>
          <p>Montant : {expense.amount} €</p>
          <p>Date : {expense.date.toLocaleDateString()}</p>
          <p>Catégorie : {expense.category}</p>
          <button onClick={saveExpense}>Enregistrer la dépense</button>
        </div>
      )}
    </div>
  );
}

export default TicketScanner;