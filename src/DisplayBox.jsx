import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function DisplayBox({aqiInfo}){
    let imageUrl = "";
    let aqi = aqiInfo.aqi;
    let airQuality = "";
    if(aqi <=50){
      imageUrl = "../images/good.jpg";
      airQuality = "good";
    }
    else if(aqi>=51 && aqi<=100){
      imageUrl = "../images/fair.jpg";
      airQuality = "fair";
    }
    else if(aqi>=101 && aqi<=200){
      imageUrl = "../images/moderate.jpg";
      airQuality = "moderate";
    }
    else if(aqi>=201 && aqi<=300){
      imageUrl = "../images/poor.jpg";
      airQuality = "poor";
    }
    else if(aqi>=301){
      imageUrl = "../images/verypoor.jpg";
      airQuality = "verypoor";
    }

    return(
        <div>
           <Card style={{width:"600px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt="air quality image"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            <h2>{aqiInfo.city}</h2>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div style={{fontSize:28}}><i>Air Quality is {airQuality}</i></div>
            <h2>Air Quality Index is {aqiInfo.aqi}</h2>
            <h2>PM10 Concentration is {aqiInfo.pm10}μg/m<sup>3</sup></h2>
            <h2>Nitrogen Dioxide concentration is {aqiInfo.no2}μg/m<sup>3</sup></h2>
            <h2>Ozone Concentration is {aqiInfo.o3}μg/m<sup>3</sup></h2>
            <h2>Sulphur Dioxide Concentration is {aqiInfo.so2}μg/m<sup>3</sup></h2>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            
        </div>
    )
}