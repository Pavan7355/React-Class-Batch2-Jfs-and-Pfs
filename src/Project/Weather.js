import React, { useState,useEffect } from 'react'
import'./weather.css'
import axios from 'axios'
const API_KEY="ksj2xeXELnJ9wi84bRJxUQ4dRieldHqe"
function Weather() {
   const[city,setCity]=useState('')
   const[weatherdata,setWetherData]=useState(null)
   const[error,setError]=useState(false)
   useEffect(()=>{
    fetchWeatherByGeolocation();
},[])
   const fetchWeatherByGeolocation = async () => {
    try {
  // Get user's current position using Geolocation API
navigator.geolocation.getCurrentPosition(async (position) => {
const { latitude, longitude } = position.coords;
   const response = await axios.get(
`https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=${API_KEY}`
        );
        console.log(response.data)
        setWetherData(response.data);
    
      });
    } catch (error) {
      setError(true)
    }
  };
 const handleLocation= async ()=>{
            try{
                let response=await  
                axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`)
      console.log(response)
      setWetherData(response)
            }
            catch (error){
                setError(true)
            }
            }
  return (
    <>
  <div className='container'>
<h1 className='title'>Search Weather Condition</h1>
<div className='inputContainer'>
    <input type='text' placeholder='Enter City Name'
    className='input' value={city} onChange={(e)=>setCity(
        e.target.value
    )}/>
    <button className='button' onClick={handleLocation}>Search</button>
</div>
{error&&<p className='error'>Failed to fetch data</p>}
{weatherdata&&(
    <div className='weatherContainer'>
        <h2 className='subtitle'>{weatherdata.data.location.name}</h2>
        <p className='temperature'>Temperature: {weatherdata.data.data.values.temperature} <sup>o</sup>C</p>
        <p className='humidity'>Humidity: {weatherdata.data.data.values.humidity} %</p>
        <p className='windspeed'>Wind Speed : {weatherdata.data.data.values.windSpeed} mph</p>
        </div>
)}
  </div>
    </>
  )
}

export default Weather
