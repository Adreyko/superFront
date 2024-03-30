import { useEffect, useState } from 'react'
import className from  './Counter.module.scss'
import { Link } from 'react-router-dom'

const Counter = () => {
    const [count,setCount] = useState(0)
    const [timer,setTimer] = useState(0)
    const [start,setStart] = useState(false)
    const [input,setInput] = useState('')


    useEffect(() => {
        if (start) {
            const timeoutId = setTimeout(() => {
                setTimer(prev => prev + 1); 
            }, 1000);
    

    return () => clearTimeout(timeoutId);

        
        }
    }, [start, input,timer])

    useEffect(()=>{
        if(Number(input) === timer) {
            setStart(false)
        }
    },[timer,input])
  return (
    <div>
        <button className={className.btn} onClick={()=>setCount(prev => prev === 10 ? 10 : prev + 1)}>+1</button>
        {count}  
        <button onClick={()=>setCount(prev => prev === 0 ? 0 : prev - 1)}>-1</button>

        {count === 10 && <div style={{color : 'red'}}>achieved limit :{count}!!!</div>}
        timer : {timer}

        <div>
            <h1> input for timer : </h1>
           
            <input onChange={(e) => setInput(e.target.value)}/>
        </div>
        {Number(input) === timer  && timer !== 0 && <div>TIMER!!!</div>}
        <button onClick={()=>setStart(true)}>Start</button>
        <button onClick={()=>setStart(false)}>Pause</button>
 
    </div>
           
  )
}

export default Counter