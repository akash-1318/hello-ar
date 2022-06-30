import "./sidebar.css"

function Sidebar(){
    return(
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
          <li className="sidebar__menu">
              <p>Settings</p>
          </li>
        </ul>
      </aside>
    )
}

export {Sidebar}