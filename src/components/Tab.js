import { useContext } from 'react';
import PropTypes from 'prop-types';
import BookContext from '../contextProvider/bookProvider';

const Tab = ({ id, name }) => {
  const { toggle, onToggle } = useContext(BookContext);
  return (
    <li key={id} className="nav-item">
      <a href="/#" role="button" className={toggle === id ? 'nav-link active' : 'nav-link'} onClick={() => onToggle(id)}>
        {name}
      </a>
    </li>
  );
};

export default Tab;

Tab.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
