import React from 'react';
import { formatUsersData } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

function OnlineUsers ( { list, status} ) {
 const userDataAndStatusArr =  formatUsersData(list, status);
 let userInfo = userDataAndStatusArr.filter(elem => elem.status === 'online').map( el =>
    <tr
      key={ uuidv4()}
      className={`table__tr  table__tr--${ el.status }`}
    >
      <td
        key={ uuidv4()}
        className="table__td" >
        <img
          key={ `${ el.name }-img` }
          alt=""
          src={ el.logo }
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

    return (<>{userInfo}</> );

 };


export default OnlineUsers;
