import React from 'react';
import { formatUsersData } from '../../utils';

function OfflineUsers ( {  list, status} ) {
 const userDataAndStatusArr =  formatUsersData(list, status);
 let userInfo = userDataAndStatusArr.filter(elem => elem.status === 'offline').map( el =>
    <tr
      key={  el.id }
      className={`table__tr  table__tr--${ el.status }`}
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

    return(<>{userInfo }</>);
 };


export default OfflineUsers;
