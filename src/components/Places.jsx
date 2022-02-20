import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './styles.scss/Places.scss'

const Places = () => {

    const inputRef = useRef('');
    const [cond, setCond] = useState([]);
    const [end,setEnd] = useState('');


    useEffect(() => {
        fetch(`https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=+${end}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "",
              "x-rapidapi-key": ""
          }
      })
      .then(response => {
          return response.json();
      }).then(data => {
        setCond([data])
      })
      .catch(err => {
          console.error(err);
      });
      },[end])
      
      const onSubmit = (e) => {
        e.preventDefault();
        setEnd(inputRef.current.value)
      }



    return (
        <div className='chat-bot'>
             <form onSubmit={onSubmit} className='form'>
          <input type="text" placeholder='message' ref={inputRef}/>
          <button type='submit'>Send</button>
        </form>
        
       {cond.map((item,index) => {
         return (
             <div key={index}>
               {item.cnt}
             </div>
        )
       })}

        </div>
    )
}

export default Places