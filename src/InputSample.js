import React, { useState } from 'react';


function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : '',
    });

    const {nmae, nickname} = inputs;
    const onChange = (e) =>{
    
    };

    const onReset = () => {

    };
    return (
        <div>
            <input placeholder="이름" />
            <input placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
            </div>
        </div>
        
    )
}

export default InputSample;