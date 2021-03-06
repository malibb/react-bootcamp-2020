import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Videos from '../../components/Videos';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/favorites">show me something cool →</Link>
          </span>
        </>
      ) : (
        <h1>Bienvenidos al challenge 2020</h1>
      )}
      <Videos />
    </section>
  );
}

export default HomePage;
