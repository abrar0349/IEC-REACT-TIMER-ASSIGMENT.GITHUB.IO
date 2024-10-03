import React from 'react'
import './Timer.css'
import { useState } from 'react'

function Timer() {
    let [ timer , setTimer] = useState(0)

    const increamentFunc = () => {
        setTimer( (prevTimer) => prevTimer + 1)
    }

    const DecrementFunc = () => {
        if(timer > 0){
        setTimer((prevTimer) => prevTimer - 1)
        }
    }

    const stopFunc = () => {
        setTimer(0)
    }
  return (
    <>
        <div className = "timer">
            <h1>Timer: {timer} </h1>
            <div className='timerBtn'>
                <button onClick={increamentFunc}>Increment</button>
                <button onClick={stopFunc}>Stop</button>
                <button onClick={DecrementFunc}>Decrement</button>
            </div>
        </div>
    </>
  )
}

export default Timer
