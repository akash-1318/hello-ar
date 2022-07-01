import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--white-color)" : "",
    backgroundColor: isActive ? "var(--primary-color)" : "",
  });

  return (
    <aside className="sidebar__menus">
      <ul className="sidebar__menu-container">
        <li className="sidebar__menu">
          <p>Products</p>
        </li>
        <li className="sidebar__menu">
          <p>Demo Script</p>
        </li>
        <li className="sidebar__menu">
          <p>Customers</p>
        </li>
        <li className="sidebar__menu">
          <p>Sales Team</p>
        </li>
        <li className="sidebar__menu">
          <p>Demos</p>
        </li>
        <NavLink
          style={getActiveStyle}
          to="/"
          className="sidebar__menu navlink"
        >
          Settings
        </NavLink>
      </ul>
    </aside>
  );
}

export { Sidebar };
