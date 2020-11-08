import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Weather.scss'


const Weather = () => {
    
    const APIKEY = "1f72598332cb41b6b48cf48b535036b0";
    const city = 'NewYork,US'
    const [data, setData] = useState({});
    // const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${APIKEY}`);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const iconUrl = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;
    const iconUrl = 'https://www.weatherbit.io/static/img/icons/t01d.png';
    

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);
            
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return (
        <>
            {isError && <div>Something went wrong ...</div>}
    
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.city_name}
                    <img src={iconUrl} alt=""/>
                    {/*<span className="weather-description">{data.data[0].weather.description }</span>*/}
                </ul>
            )}
        </>
    );
}

export default Weather