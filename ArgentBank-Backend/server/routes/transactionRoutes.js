const express = require('express');
const router = express.Router();
let transactions = require('../mockTransactions');

// GET /transactions/:accountId => liste des transactions d’un compte
router.get('/transactions/:accountId', (req, res) => {
  const { accountId } = req.params;
  const { month } = req.query;

  let userTransactions = transactions.filter(t => t.accountId === accountId);

  if (month) {
    userTransactions = userTransactions.filter(t =>
      t.date.startsWith(month)
    );
  }

  if (userTransactions.length === 0) {
    return res.status(404).json({ message: 'Aucune transaction trouvée.' });
  }

  res.status(200).json(userTransactions);
});

// GET /transactions/:accountId/:transactionId => détails d’une transaction
router.get('/transactions/:accountId/:transactionId', (req, res) => {
  const { accountId, transactionId } = req.params;

  const transaction = transactions.find(
    t => t.accountId === accountId && t.id === transactionId
  );

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction non trouvée.' });
  }

  res.status(200).json(transaction);
});

// PUT /transactions/:accountId/:transactionId => modifier une transaction
router.put('/transactions/:accountId/:transactionId', (req, res) => {
  const { accountId, transactionId } = req.params;
  const { category, note } = req.body;

  const index = transactions.findIndex(
    t => t.accountId === accountId && t.id === transactionId
  );

  if (index === -1) {
    return res.status(404).json({ message: 'Transaction non trouvée.' });
  }

  if (category) transactions[index].category = category;
  if (note) transactions[index].note = note;

  res.status(200).json(transactions[index]);
});

module.exports = router;
