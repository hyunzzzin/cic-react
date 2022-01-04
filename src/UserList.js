import React, { useEffect } from 'react';


function User({ user, onRemove, onToggle }) {
    const { username, email, id, active} = user;
    
    useEffect(() => {
        console.log(user);
    });

    return (
      <div>
        <b 
            style={{
                color: active ? 'pink' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
        >
            {username}
        </b> 
        &nbsp;
        <span>[{email}]</span>
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    );
  }
function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
           {
            users.map(
                (user,i) => (
                    <User 
                        user={user} 
                        key={i} 
                        // email={user.email}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                   )
               )
           }
        </div>
    );
}

export default UserList;