import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{background: "#f5f7f8"}}>
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Lambda Wiki</strong> by <a href="https://www.richardreis.me/">Richard Reis</a> &amp; <a href="https://github.com/myxozoa">Ronnie Miksch</a>.
            Created for use by <a href="https://lambdaschool.com/">Lamdba</a> students and the especially curious.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;