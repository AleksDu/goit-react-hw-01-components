import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Template = ({ children }) => <Container>{children}</Container>;

Template.defaultProps = {
  children: [],
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
