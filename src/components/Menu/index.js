import  React  from 'react';

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


export default Menu;
