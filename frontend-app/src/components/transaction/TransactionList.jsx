import PropTypes from 'prop-types';
import React from 'react';
import './transaction.css';
import { useState } from 'react';

function TransactionList({ transactions, expandedTransactions, onToggleTransaction }) {
  const [editableCategory, setEditableCategory] = useState(null);
  const [editableNote, setEditableNote] = useState(null);
  const [notes, setNotes] = useState({});
  const [categories, setCategories] = useState({});

  const handleCategoryChange = (id, value) => {
    setCategories({ ...categories, [id]: value });
  };

  const handleNoteChange = (id, value) => {
    setNotes({ ...notes, [id]: value });
  };

  return (
    <div className="transaction-section">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <React.Fragment key={tx.id}>
              <tr
                className="transaction-row"
                onClick={() => onToggleTransaction(tx.id)}
              >
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td>{tx.amount}</td>
                <td>{tx.balance}</td>
                <td className="arrow-cell">⌄</td>
              </tr>

              {expandedTransactions[tx.id] && (
                <tr className="transaction-details">
                  <td colSpan="5">
                    <div className="details-content">
                      <p>
                        <strong>Transaction type:</strong> {tx.type}
                      </p>
                      <p>
                        <strong>Category:</strong>{' '}
                        {editableCategory === tx.id ? (
                          <select
                            value={categories[tx.id] || tx.category}
                            onChange={(e) =>
                              handleCategoryChange(tx.id, e.target.value)
                            }
                            onBlur={() => setEditableCategory(null)}
                          >
                            <option>Food</option>
                            <option>Housing</option>
                            <option>Other</option>
                          </select>
                        ) : (
                          <>
                            {categories[tx.id] || tx.category}{' '}
                            <span
                              className="edit-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditableCategory(tx.id);
                              }}
                            >
                              ✏️
                            </span>
                          </>
                        )}
                      </p>
                      <p>
                        <strong>Note:</strong>{' '}
                        {editableNote === tx.id ? (
                          <input
                            type="text"
                            value={notes[tx.id] || tx.note}
                            onChange={(e) =>
                              handleNoteChange(tx.id, e.target.value)
                            }
                            onBlur={() => setEditableNote(null)}
                          />
                        ) : (
                          <>
                            {notes[tx.id] || tx.note || '—'}{' '}
                            <span
                              className="edit-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditableNote(tx.id);
                              }}
                            >
                              ✏️
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  expandedTransactions: PropTypes.object.isRequired,
  onToggleTransaction: PropTypes.func.isRequired,
};

export default TransactionList;