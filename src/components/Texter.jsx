import React, {useState} from 'react';

const Texter = function (){
    const [inputtext, setinputText] = useState('Нажми на кнопку и текст очиститься')
    const [btnstate, setBtnState] = useState(true)

    function changeText(){
        setinputText('');
    }

    function setButtonState(){
        setBtnState(!btnstate)
    }

    return(
        <div>
            <h1>{inputtext}</h1>
            <button disabled={btnstate} onClick={changeText}>Собственно кнопка</button>
            <button onClick={setButtonState}>Change button state</button>
            <input
                type="text"
                text={inputtext}
                onChange={event => setinputText(event.target.value)}
            />
        </div>
    )
}

export default Texter;