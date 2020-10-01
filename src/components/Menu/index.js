import  React          from 'react';
import  Nav            from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';


const Menu =  ( { isLoading } ) => ( isLoading )
  ? <div>
     <div className="message">
       <h1>Loading&nbsp;...</h1>
     </div>
    </div>

  : <Nav
      variant="pills"
      defaultActiveKey="/react-twitch-status-users/all"
      className="mt-2 mb-2"
    >
    <Nav.Item>
    <LinkContainer to="/react-twitch-status-users/all">
       <Nav.Link>All</Nav.Link>
     </LinkContainer>
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to="/react-twitch-status-users/online">
      <Nav.Link>Online</Nav.Link>
     </LinkContainer>
    </Nav.Item>
    <Nav.Item>
     <LinkContainer to="/react-twitch-status-users/offline">
       <Nav.Link>Offline</Nav.Link>
     </LinkContainer>
    </Nav.Item>
   </Nav>;


export default Menu;
