import React from 'react';
import Table from 'react-bootstrap/Table';
import OnlineUsers from './OnlineUsers';
import OfflineUsers from './OfflineUsers';

const AllUsersTable = ( { isLoading, list, status  } ) =>
  ( !isLoading )
  ? <Table hover responsive>
     <tbody>
      <tr className="table__th">
        <th>Logo</th>
        <th>Name</th>
        <th>Status</th>
        <th>Game</th>
      </tr>
      <OnlineUsers
         list={list}
         status={status}
      /> 
      <OfflineUsers
        list={list}
       status={status}
      />
     </tbody>
    </Table>
  : null;

const OnlineUsersTable = ( { isLoading, list, status  } ) =>
  ( !isLoading )
  ? <Table hover responsive>
     <tbody>
      <tr className="table__th">
        <th>Logo</th>
        <th>Name</th>
        <th>Status</th>
        <th>Game</th>
      </tr>
      <OnlineUsers
         list={list}
         status={status}
      /> 
    </tbody>
    </Table>
  : null;

const OfflineUsersTable = ( { isLoading, list, status  } ) =>
  ( !isLoading )
  ? <Table hover responsive>
     <tbody>
      <tr className="table__th">
        <th>Logo</th>
        <th>Name</th>
        <th>Status</th>
        <th>Game</th>
      </tr>
     <OfflineUsers
        list={list}
        status={status}
      />
     </tbody>
    </Table>
  : null;

export { AllUsersTable, OnlineUsersTable, OfflineUsersTable };


