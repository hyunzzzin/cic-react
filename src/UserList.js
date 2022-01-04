import React from 'react';

function User({ user,onRemove, key, email }) {
    return (
      <div>
          {console.log(user)}
        <b>{user}</b> <span>({email})</span>
        <button onClick={() => onRemove(key)}>삭제</button>
      </div>
    );
  }
function UserList({ users, onRemove }) {

    return (
        <div>
            {console.log(onRemove)}
           {
               users.map(
                   (user, index) => (
                        <User 
                            user={user.username} 
                            key={user.id} 
                            email = {user.email}
                            onRemove={onRemove}
                        />
                   )
               )
           }
        </div>
    );
}

export default UserList;