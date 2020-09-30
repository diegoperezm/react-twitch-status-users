import  React  from 'react';
import  { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const placeholder = "./img/placeholder.png";

 const USERS = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"];

 const PATH_BASE  = 'https://wind-bow.glitch.me/twitch-api';
 const PARAM_USER = '/users/';
 const PARAM_STREAM =  '/streams/';
 const USER_URL_ARR = USERS.map(ele => `${PATH_BASE}${PARAM_USER}${ele}`);
 const STREAM_URL_ARR = USERS.map(ele => `${PATH_BASE}${PARAM_STREAM}${ele}`);

 const Menu =  ( { isLoading, onClick } ) => ( isLoading )
  ? <div>
     <Menu />
     <div className="message">
       <h1>Loading&nbsp;...</h1>
     </div>
    </div>

 : <div className="menu" >
     <button onClick={ onClick } >All</button>
     <button onClick={ onClick } >Online</button>
     <button onClick={ onClick } >Offline</button>
   </div>;


 const Table = ( { isLoading, children } ) =>
  ( !isLoading )
  ? <table className="table">
     { children }
    </table>
  : null;

  function Tr ( { onClick, selected, list, status} ) {

    const idUsersOnline = status
                              .filter( el => el.stream != null)
                              .map( el =>   el.stream.channel._id );
    
    const usersOffline  = list
                              .filter( el => !idUsersOnline.includes( el._id ) )
                              .map( ele => Object.assign( {},
                                      ({
                                          name: ele.display_name,
                                          logo: ele.logo || placeholder,
                                          id: ele._id,
                                          status: 'offline',
                                          game: ''
                               })));


    const usersOnline = status
                             .filter( el => el.stream != null )
                             .map( ele =>
                                  Object.assign( {},
                                    ({
                                    name: ele.stream.channel.display_name,
                                    logo: ele.stream.channel.logo || placeholder,
                                    id: ele.stream.channel._id,
                                    status: 'online',
                                     game: ele.stream.game
                               })));
   
   const userDataAndStatusArr =   usersOnline.concat( usersOffline );

   var userInfo = userDataAndStatusArr.map(  el  =>
      <tr
        key={  el.id }
        className={
            `table__tr  table__tr--${ el.status } ${
            (
            selected === 'All' ||
            selected === 'Online' && el.status  === 'online' ||
            selected === 'Offline' && el.status  === 'offline'
            )
            ? ''
            : 'hidden'
            }`
            }
      >
        <td
          key={
              `${ el.name }-logo`}
          className="table__td" >
          <img
            key={ `${ el.name }-img` }
            alt=""
            src={ el.logo }
            className="table__td__img"
          />
        </td>
        <td
          key={ el.name }
          className="table__td"
        >
          { el.name }
        </td>
        <td
          key={ `${ el.name }-status` }
          className="table__td"
        >
          { el.status }
        </td>
        <td
          key={ el.game }
          className="table__td"
        >
          { el.game }
        </td>
     </tr>);

      return <tbody>
        <tr className="table__th">
          <th>logo</th>
          <th>name</th>
          <th>status</th>
          <th>game</th>
        </tr>
        {  userInfo }
      </tbody>;
   };




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
     <Table isLoading={ isLoading } >
       <Tr
         selected={selected}
         list={result}
         status={stream}
       />
     </Table>
   </div>
   );
}

export default App;
