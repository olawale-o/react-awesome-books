import { useContext } from "react";
import { BookContext } from "../contextProvider/bookProvider";

const Tab = ({ id, name}) => {
  const { toggle, onToggle } = useContext(BookContext);
  return (
    <li key={id} className="nav-item">
      <a href="/#" role="button" className={toggle === id ? "nav-link active" : "nav-link"} onClick={() => onToggle(id)}>
          {name}
      </a>
    </li>
  );
};

export default Tab;