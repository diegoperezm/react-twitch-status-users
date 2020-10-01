import React from 'react';
import Table from 'react-bootstrap/Table';
import OnlineUsers from './OnlineUsers';
import OfflineUsers from './OfflineUsers';

const UsersTable = ( { isLoading, selected, list, status  } ) =>
  ( !isLoading )
  ? <Table hover responsive>
     <tbody>
      <tr className="table__th">
        <th>logo</th>
        <th>name</th>
        <th>status</th>
        <th>game</th>
      </tr>
      <OnlineUsers
         selected={selected}
         list={list}
         status={status}
      /> 
      <OfflineUsers
        selected={selected}
        list={list}
       status={status}
      />
     </tbody>
    </Table>
  : null;

export default UsersTable;

