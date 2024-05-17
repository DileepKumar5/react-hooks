import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const Component1 = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => { setCounter(counter + 1) }
    const decrement = () => {
        if (counter <= 0) return; //exit from function
        setCounter(counter - 1)
    }
    useEffect(() => {
        console.log("component 1 mounted");
    }, [counter])
    return (

        <div className='text-3xl font-bold flex gap-5 items-center justify-center'>
            <Button variant="destructive" onClick={decrement} >-</Button>
            {counter}
            <Button onClick={increment}>+</Button>

        </div>
    )
}

export default Component1
