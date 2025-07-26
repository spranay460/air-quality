import SearchBox from "./SearchBox"
import DisplayBox from "./DisplayBox"
import { useState } from "react"
import "./AirQuality.css";
export default function AirQuality(){
    let [aqiInfo, setAqiInfo] = useState({
        
    })
    let updateInfo = (newInfo)=>{
        setAqiInfo(newInfo);
    }
    async function getInitialData(){
        const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=tokyo`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
    };
	const response = await fetch(url, options);
	const jsonResponse = await response.json();
    updateInfo({
        city: "tokyo",
        aqi: jsonResponse.overall_aqi,
        pm10: jsonResponse.PM10.concentration,
        co: jsonResponse.CO.concentration,
        no2: jsonResponse.NO2.concentration,
        o3: jsonResponse.O3.concentration,
        so2: jsonResponse.SO2.concentration,
    })
    }
    {!aqiInfo.city && getInitialData()}

    return(
        <div className="Airquality">
           
            <SearchBox updateInfo={updateInfo}className="SearchBox"></SearchBox>
            <br /><br />
            {aqiInfo.city && <DisplayBox aqiInfo={aqiInfo}></DisplayBox>}
        </div>
    )
}
