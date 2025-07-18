import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Account from '../components/account/Account';
import EditNameForm from '../components/editnameform/EditNameForm';
import TransactionList from '../components/transaction/TransactionList';
import './user.css';

const fakeTransactions = [
  {
    id: 1,
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    type: 'Electronic',
    category: 'Food',
    note: 'lorem ipsum',
  },
  {
    id: 2,
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    type: 'Electronic',
    category: 'Food',
    note: 'lorem ipsum',
  },
  {
    id: 3,
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    type: 'Electronic',
    category: 'Food',
    note: 'lorem ipsum',
  },
];

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [openAccountId, setOpenAccountId] = useState(null);
  const [expandedTransactions, setExpandedTransactions] = useState({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/SignIn');
    }
  }, [isAuthenticated, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const toggleTransactions = (accountId) => {
    setOpenAccountId((prev) => (prev === accountId ? null : accountId));
    setExpandedTransactions({});
  };

  const toggleTransactionDetails = (transactionId) => {
    setExpandedTransactions((prev) => ({
      ...prev,
      [transactionId]: !prev[transactionId],
    }));
  };

  if (!user) return null;

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          {!isEditing ? (
            <>
              <h1>
                Welcome back
                <br />
                {user.userName}!
              </h1>
              <button className="edit-button" onClick={handleEditClick}>
                Edit Name
              </button>
            </>
          ) : (
            <EditNameForm onCancel={handleCancel} />
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        {/* Encarts fixes + transactions identiques */}
        {[1, 2, 3].map((accountId) => (
          <div key={accountId}>
            <Account
              title={
                accountId === 1
                  ? 'Argent Bank Checking (x8349)'
                  : accountId === 2
                  ? 'Argent Bank Savings (x6712)'
                  : 'Argent Bank Credit Card (x8349)'
              }
              amount={
                accountId === 1
                  ? '$2,082.79'
                  : accountId === 2
                  ? '$10,928.42'
                  : '$184.30'
              }
              description={
                accountId === 3 ? 'Current Balance' : 'Available Balance'
              }
              onToggle={() => toggleTransactions(accountId)}
              isOpen={openAccountId === accountId}
            />
            {openAccountId === accountId && (
              <TransactionList
                transactions={fakeTransactions}
                expandedTransactions={expandedTransactions}
                onToggleTransaction={toggleTransactionDetails}
              />
            )}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default User;
