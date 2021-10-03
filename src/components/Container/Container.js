import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
