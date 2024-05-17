'use client';
import React, { useEffect, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

const UseEffectComponenet = () => {

    // const[a,setA] =  useState(0);
    

    // useEffect (() => {
    //     console.log("UseEffect for component1 Called");
    //     setA(10); // work on loading
    // }, []); //if dependecy array is empty it will only run once
  return (
    <div className='font-bold  text-5xl'>
       {/* <Component1/>
       <Component2/> */}
       <Component4/>

      
    </div>
  )
}

export default UseEffectComponenet
