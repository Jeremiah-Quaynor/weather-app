import React, {useState} from 'react'
import Image from 'next/image'
import {BsSearch} from 'react-icons/bs'
import axios from 'axios'
import Card from './Card'
import Spinner from './Spinner'

const NEXT_PUBLIC_WEATHER_KEY = "b04f9d11e13f127d91ee8ba533724fd1"


const Weather = () => {
    const [loading, setLoading ] = useState(false)
    const [city, setCity ] = useState('')
    const [weather, setWeather ] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${NEXT_PUBLIC_WEATHER_KEY}&units=imperial`

    const getData = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.get(url).then((res)=>{
            setWeather(res.data)
        }).catch((err)=> console.log(err))
        setCity('')
        setLoading(false)
    }

    if(loading) {
    return  <Spinner />
    }else {
        return (
            <div className=''>
                <div>
                    <Image src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                    alt="/"
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                {/* Overlay */}
                <div className='absolute bg-black/20 w-full h-screen z-10 top-0 right-0 left-0  bottom-0'/>
                {/* form */}
                <div className='bg-transparent max-w-[500px] mx-auto mt-4 p-3 relative flex justify-between z-10  '>
                    <form onSubmit={getData}
                    className='text-white flex justify-between items-center w-full m-auto  border border-gray  rounded-2xl p-3'>
                        <div >
                            <input className='bg-transparent border-none focus:outline-none text-xl text-white placeholder:text-white' 
                            type="text"
                            placeholder='Search City' 
                            onChange={(e)=> setCity(e.target.value)}
                            />
                        </div>
                        <button onClick={getData} className='pl-2'>
                            <BsSearch size={20} />
                        </button>
                    </form>
                </div>
                {/* Weather */}
                {weather.main && <Card data={weather} />}
            </div>
          )
    }
    

}

export default Weather