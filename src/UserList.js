import React, { useEffect } from 'react';


function User({ user, onRemove, onToggle }) {
    const { username, email, id, active} = user;
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        // props -> state
        //REST API
        // D3 Video.js
        // setInterval, setTimeout
        return () => {
            // clearInterval, clearTimeout
            //라이브러리 인스터스 제거
            //클리너함수는 뒷정리 함수라고 하면 될듯 ?
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
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
                (user) => (
                    <User 
                        user={user} 
                        key={user.id} 
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