import React from 'react';
import { formatUsersData } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import { PLACEHOLDER }  from '../../utils';

function OfflineUsers ( {  list, status} ) {
 const userDataAndStatusArr =  formatUsersData(list, status);
 let userInfo = userDataAndStatusArr.filter(elem => elem.status === 'offline').map( el =>
    <tr
      key={ uuidv4()}
      className={`table__tr  table__tr--${ el.status }`}
    >
      <td
        key={ uuidv4()}
        className="table__td" >
        <img
          key={ uuidv4()}
          alt=""
          src={ el.logo }
          onError={(e)=>{ if(PLACEHOLDER !== undefined ) e.target.src=PLACEHOLDER;}}
          className="table__td__img"
        />
      </td>
      <td
        key={ uuidv4()}
        className="table__td"
      >
        { el.name }
      </td>
      <td
        key={ uuidv4()}
        className="table__td"
      >
        { el.status }
      </td>
      <td
        key={ uuidv4()}
        className="table__td"
      >
        { el.game }
      </td>
   </tr>);

    return(<>{userInfo }</>);
 };


export default OfflineUsers;
