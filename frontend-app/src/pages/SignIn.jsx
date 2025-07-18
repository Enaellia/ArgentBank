import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { loginSuccess, setUser } from '../store/userSlice';
import './signin.css';
import { authenticated, getProfile } from '../store/userAction';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Étape 1 : login pour obtenir le token
      const token = await dispatch(authenticated(username, password))
      console.log(token)
      // Étape 2 : appel à /profile avec le token
      dispatch(getProfile(token))
      // Étape 3 : rediriger vers la page utilisateur
      navigate('/User');
    } catch (err) {
      console.error(err);
      setError('Identifiants invalides. Veuillez réessayer.');
    }
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
