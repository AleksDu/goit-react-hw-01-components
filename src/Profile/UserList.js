import User from './User';
// import PropTypes from 'prop-types';

function UserList({ items }) {
  return (
    <User
      name={items.name}
      tag={items.tag}
      location={items.location}
      avatar={items.avatar}
      stats={items.stats}
    />
  );
}

// UserList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default UserList;
