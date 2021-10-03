import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s['transaction-history']}>
    <thead className={s['transaction-head']}>
      <tr>
        <th className={s['transaction-title']}>Type</th>
        <th className={s['transaction-title']}>Amount</th>
        <th className={s['transaction-title']}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className={s['transaction-row']} key={item.id}>
          <td className={s['transaction-cell']}>{item.type}</td>
          <td className={s['transaction-cell']}>{item.amount}</td>
          <td className={s['transaction-cell']}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
