import React from 'react';
import Tr from './Tr';

const Table = ( { isLoading, selected, list, status  } ) =>
  ( !isLoading )
  ? <table className="table">
      <Tr
         selected={selected}
         list={list}
         status={status}
    /> 
    </table>
  : null;

export default Table;

