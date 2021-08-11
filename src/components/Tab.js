
const Tab = ({ id, name }) => {
  return (
    <li key={id} className="nav-item">
        <a href="/#" role="button" className="nav-link">{name}</a>
    </li>
  );
};

export default Tab;