import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

// api name: air quality by api-ninjas(rapid api)
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getAirQualityInfo = async ()=>{
    try{
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8ac22db812msh13a6a9b07a38e33p1c0576jsnff6bb3375f92',
		'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
    };
	const response = await fetch(url, options);
	const jsonResponse = await response.json();
    let result = {
        city: city,
        aqi: jsonResponse.overall_aqi,
        pm10: jsonResponse.PM10.concentration,
        co: jsonResponse.CO.concentration,
        no2: jsonResponse.NO2.concentration,
        o3: jsonResponse.O3.concentration,
        so2: jsonResponse.SO2.concentration,
    }
    return result;
    }
    catch(err){
        throw err;
    }
}


    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        setCity("");
        let newInfo = await getAirQualityInfo();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }
    return(
        <div className='Searchbox'>
        <h2>Air Quality Application</h2>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handleChange} style={{width:"400px"}}/>
        <br /><br />
        <Button variant="contained" type='submit' style={{width:"100px", height:"50px"}}>Search</Button>
        {error && <Alert severity="error">This place does not exist in api</Alert>}
        </form>
        
        </div>
    )
}

