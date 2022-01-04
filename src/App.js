import React,{ useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
  }

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id:1,
      username: 'anhyunjin',
      email: 'a01020813765@gmail.com',
      active: true,
  },
  {
      id:2,
      username: 'hohohoho',
      email: 'hohohoho@gmail.com',
      active:false,
  },
  {
      id:3,
      username: 'asdslf',
      email: 'dfsgdsg@gmail.com',
      active:false,
  },
  ]
}

function reducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { usernamme, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  },[]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
      />
      <UserList users={users} />
      <div>활성 사용자 수: 0</div>
    </>
  );
}

export default App;
