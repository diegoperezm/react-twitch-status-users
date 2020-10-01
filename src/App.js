import React                                     from 'react';
import { useState, useEffect }                   from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './components/Menu';
import  {
 AllUsersTable,
 OnlineUsersTable,
 OfflineUsersTable
}  from './components/UsersTable/';

import { USER_URL_ARR, STREAM_URL_ARR }  from './utils/';

function App() {
  const [isLoading, setLoading]  = useState(true);
  const [result,    setResult]   = useState([]);
  const [stream,    setStream]   = useState([]);


  useEffect( () => {
  /*
  Not sure about this one, maybe is better to use only Promise.all
  (without the  fetch* async functions)
  */

  const fetchUsers = async ()  => {
     let users = USER_URL_ARR.map(
     url => fetch( url )
     .then( res => res.json() )
     .then( json => json ));

     Promise.all(users).then(val => setResult(val));

  };

  const fetchStream = async() => {
     let usersStream =  STREAM_URL_ARR.map(
         url => fetch( url )
         .then( res => res.json())
         .then( json => json));

         Promise.all(usersStream).then(val => setStream(val));
      };

      fetchUsers();
      fetchStream();
      setLoading(false);
  },[]);

 return (
    <Router>
     <Container  >
       <Row>
         <Col xs={12}>
          <Menu isLoading={ isLoading  } />
         <Switch>
            <Route exact path="/react-twitch-status-users/">
              <AllUsersTable 
               isLoading={ isLoading }
               list={result}
               status={stream} />
             </Route>
            <Route exact path="/react-twitch-status-users/online">
              <OnlineUsersTable 
               isLoading={ isLoading }
               list={result}
               status={stream} />
             </Route>
             <Route exact path="/react-twitch-status-users/offline">
              <OfflineUsersTable 
               isLoading={ isLoading }
               list={result}
               status={stream} />
             </Route>
            <Route exact path="/react-twitch-status-users/all">
              <AllUsersTable 
               isLoading={ isLoading }
               list={result}
               status={stream} />
             </Route>
            </Switch>
            </Col>
       </Row>
     </Container>
    </Router>
 );
}


export default App;

