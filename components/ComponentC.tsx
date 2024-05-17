import React from 'react'
import { Button } from './ui/button';
type  ComponentType = {
  counter: number;
  setcounter: React.Dispatch<React.SetStateAction<number>>
}


const ComponentC = ({counter, setcounter}: ComponentType) => {
  return (
    <div className='border border-black bg-orange-300 h-[75%] w-[75%] rounded-lg items-center justify-center flex flex-col'>
        ComponentC
        <div>
          <Button variant='destructive' onClick={ () => setcounter (prev => prev-1)}> - </Button>
          {counter}
          <Button onClick={ () => setcounter (prev => prev+1)}> + </Button>
        </div>
      
    </div>
  )
}

export default ComponentC
