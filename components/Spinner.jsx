import React from 'react'
import Image from 'next/image'
import spinner from '../public/spinner1.gif'


const Spinner = () => {
  return (
    <>
        <Image src={spinner}
        className="w-[200px] m-auto block"
        alt="/"
/>
    </>
  )
}

export default Spinner