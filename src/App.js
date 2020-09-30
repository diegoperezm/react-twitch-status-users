import  React  from 'react';
import  { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Menu from './components/Menu';
import  Table from './components/Table';
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
   <div className="content" >
     <Menu
        onClick={(event) => setSelected(event.target.textContent) }
        isLoading={ isLoading  } />
     <Table
       isLoading={ isLoading }
       selected={selected}
       list={result}
       status={stream} />
   </div>
   );
}

export default App;
