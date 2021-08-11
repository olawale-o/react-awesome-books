
const Tab = ({ id, name, toggle, onToggle }) => {
  return (
    <li key={id} className="nav-item">
      <a href="/#" role="button" className={toggle === id ? "nav-link active" : "nav-link"} onClick={() => onToggle(id)}>
          {name}
      </a>
    </li>
  );
};

export default Tab;