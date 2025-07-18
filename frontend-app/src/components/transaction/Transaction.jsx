import { useState } from 'react';
import './transaction.css'; // Crée ce fichier pour y mettre le style

function Transaction({ transaction }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <>
      <tr className="transaction-row" onClick={toggleDetails}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.balance}</td>
      </tr>

      {isOpen && (
        <tr className="transaction-details">
          <td colSpan="4">
            <div className="details-container">
              <div>
                <strong>Transaction type:</strong> {transaction.type}
              </div>
              <div>
                <strong>Category:</strong> {transaction.category}
                <span className="pencil"> ✎</span>
              </div>
              <div>
                <strong>Note:</strong> {transaction.note}
                <span className="pencil"> ✎</span>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Transaction;
