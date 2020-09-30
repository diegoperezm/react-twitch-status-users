import  React  from 'react';
import  { useState, useEffect }  from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './components/Menu';
import UsersTable from './components/UsersTable';



import { USER_URL_ARR, STREAM_URL_ARR }  from './utils/';


function App() {
  const [isLoading, setLoading]  = useState(true);
  const [selected,  setSelected] = useState("All");
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
   <Container  >
     <Row>
       <Col xs={12}>
     <Menu
        onClick={(event) => setSelected(event.target.textContent) }
        isLoading={ isLoading  } />
     <UsersTable
       isLoading={ isLoading }
       selected={selected}
       list={result}
       status={stream} />
       </Col>
     </Row>
   </Container>
   );
}


export default App;

