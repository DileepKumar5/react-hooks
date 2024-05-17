import ComponentA from '@/components/ComponentA'
import UseEffectComponenet from '@/components/UseEffectComponenet'
import UseStateComponenet from '@/components/UseStateComponenet'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <UseStateComponenet/> */}
      {/* <UseEffectComponenet/> */}
      <ComponentA/>
    </div>
  )
}

export default page
