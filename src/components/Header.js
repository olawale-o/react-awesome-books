import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import Tab from './Tab';
import numberSuffix from '../helpers/index';

const Header = () => {
  const [date, setDate] = useState(null);
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
  const tabs = links.map(({
    id, name,
  }) => (
    <Tab id={id} name={name} key={id} />
  ));
  useEffect(() => {
    const interval = setInterval(() => {
      const today = DateTime.local();
      const format = { ...DateTime.DATETIME_MED_WITH_SECONDS, month: 'long' };
      const modifiedDate = today.toLocaleString(format).split(' ');
      const dayNumber = parseInt(modifiedDate[1], 10);
      modifiedDate[1] = dayNumber + numberSuffix(dayNumber);
      modifiedDate[modifiedDate.length - 1] = (modifiedDate[modifiedDate.length - 1]).toLowerCase();
      setDate(modifiedDate.join(' '));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/#">Awesome Books</a>
        </div>
        <ul className="nav-list" id="nav-list">{tabs}</ul>
      </nav>
      <p className="date" id="date">{date}</p>
    </header>
  );
};

export default Header;
