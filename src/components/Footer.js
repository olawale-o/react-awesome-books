import React from 'react';
import { DateTime } from 'luxon';

function Footer() {
  const { year } = DateTime.now();
  return (
    <footer className="footer">
      <div className="copyright">
        <p>
          Copyright
        </p>
        <p>
          All rights reserved
          <span className="year" id="year">{year}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
