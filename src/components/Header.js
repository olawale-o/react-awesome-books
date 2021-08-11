import React from 'react'
import Tab from './Tab';

const Header = () => {
    const links = [
      {
        id: 1,
        name: 'List books',
      },
      {
        id: 2,
        name: 'Add book',
      },
      {
        id: 3,
        name: 'Contact',
      },
    ];
    const tabs = links.map(({id, name}) => <Tab id={id} name={name} key={id} />)
    return (
        <header className="header">
          <nav className="nav">
            <div className="logo">
                <a href="/#">Awesome Books</a>
            </div>
            <ul className="nav-list" id="nav-list">{tabs}</ul>
          </nav>
            <p className="date" id="date"></p>
        </header>
            
    );
}

export default Header
