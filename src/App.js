import React,{ useRef } from 'react';
import './App.css';
import UserList from './UserList';



function App() {
    const users = [
      {
          id:1,
          username: 'anhyunjin',
          email: 'a01020813765@gmail.com'
      },
      {
          id:2,
          username: 'hohohoho',
          email: 'hohohoho@gmail.com'
      },
      {
          id:3,
          username: 'asdslf',
          email: 'dfsgdsg@gmail.com'
      }
  ];


  const nextId = useRef(4);

  const onCreate = () =>{
    console.log(nextId.current);
    nextId.current += 1;
  }


  return (
    <UserList users={users}/>
  );
}

export default App;
