import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "./../store/auth.js";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticate = useSelector((state) => state.auth.isAUthenticated);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticate && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
