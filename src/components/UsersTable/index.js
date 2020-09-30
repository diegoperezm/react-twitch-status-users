import React from 'react';
import Table from 'react-bootstrap/Table';
import Tr from './Tr';


const UsersTable = ( { isLoading, selected, list, status  } ) =>
  ( !isLoading )
  ? <Table hover responsive>
      <Tr
         selected={selected}
         list={list}
         status={status}
    /> 
    </Table>
  : null;

export default UsersTable;

