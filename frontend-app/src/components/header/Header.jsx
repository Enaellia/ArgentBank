import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import './header.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.user?.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {isAuthenticated ? (
          <>
            <span className="main-nav-item">
  <i className="fa fa-user-circle"></i> {userName}
</span>
            <button onClick={handleLogout} className="main-nav-item logout-button">
  <i className="fa fa-sign-out"></i> Logout
</button>
          </>
        ) : (
          <NavLink to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
