// components/featureCard/Account.jsx
import PropTypes from 'prop-types';
import './account.css';

function Account({ title, amount, description, isOpen, onToggle }) {
  return (
    <section className="account">
      <div className="account-content">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content cta">
        <button className="transaction-button" onClick={onToggle}>
          {isOpen ? 'Hide transactions' : 'View transactions'}
        </button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

export default Account;
