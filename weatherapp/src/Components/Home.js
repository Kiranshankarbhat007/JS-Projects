import React, {useState, useEffect} from 'react'
import './style.css'
import axios from 'axios'

function Home() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'India',
        humidity:10,
        wind: 10
    })

    
    const [name, setName] = useState('');

    const handleClick = () => {
        if(name.length > 0){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2dd1b72a1621b8356594543ffec6a23b&units=metric`;
            axios.get(apiUrl)
            .then(result => {
                console.log(result.data);
                setData({...data, celcius: result.data.main.temp, name: result.data.name, humidity:result.data.main.humidity, 
                wind: result.data.wind.speed})
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Search location' onChange={event => setName(event.target.value)}></input>
                    <button><img src="/Images/search.png" onClick={handleClick}></img></button>
                </div>
                <div className='weatherInfo'>
                    <img src='/Images/weather2.gif'></img>
                    <h1>{data.celcius}°C</h1>
                    <h2>{data.name}</h2>
                    <div className='details'>
                        <div className='col'>
                            <img src='/Images/humidity6.gif'></img>
                            <p>{data.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <div className='col'>
                            <img src='/Images/wind4.gif'></img>
                            <p>{data.wind} km/h</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
                <div className='fullDetails'>
                    <div>Click to full details</div>
                </div>
            </div>
        </div>
    )
}

export default Home