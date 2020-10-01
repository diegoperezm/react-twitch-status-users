import   React     from 'react';
import   Nav       from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';



const Menu =  ( { isLoading } ) => ( isLoading )
  ? <div>
     <div className="message">
       <h1>Loading&nbsp;...</h1>
     </div>
    </div>

  : <Nav
      variant="pills"
      className="mt-2 mb-2"
    >
    <Nav.Item>
      <NavLink
       className="links"
        exact
        to="/"
        activeStyle={{
            color: '#fff',
            backgroundColor: '#007bff',
        }}
      >All</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink
       className="links"
        exact
        to="/online"
        activeStyle={{
            color: '#fff',
            backgroundColor: '#007bff',
        }}
      >Online</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink
       className="links"
        exact
        to="/offline"
        activeStyle={{
            color: '#fff',
            backgroundColor: '#007bff',
        }}
       >Offline</NavLink>
    </Nav.Item>
   </Nav>;


export default Menu;
