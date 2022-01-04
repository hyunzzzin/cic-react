import React,{ useRef, useState } from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';



function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = e =>{
    const{ name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };
  const [users,setUsers] = useState([
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
      },
  ]);
  

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    };
    setUsers([users.concat(user)]);
    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1;
    console.log(user);
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  };


  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
