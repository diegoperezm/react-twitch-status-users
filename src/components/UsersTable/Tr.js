import React from 'react';
import { formatUsersData } from '../../utils';

function Tr ( { selected, list, status} ) {
 const userDataAndStatusArr =  formatUsersData(list, status);
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


export default Tr;
