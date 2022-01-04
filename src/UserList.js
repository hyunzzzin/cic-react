import React from 'react';

function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }
function UserList(){
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

    return (
        <div>
           {
               users.map(
                   user => (<User user={user} key={user.id} />)
               )
           }
        </div>
    );
}

export default UserList;