import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Weather(props){  
   
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main',
        description: 'Description',
        pressure: 'asdasd',
        temp: 0
        }) 
        
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=bd94f133a5b3a418d33fccf575569989`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                pressure: json.main.pressure,
                name: json.name,
                wind: json.wind,
                feels_like: json.main.feels_like,
                description: json.weather[0].description,
                temp: json.main.temp});
            })
        .catch((error) => {
            console.warn(error);
        });
        }
        }, [props.zipCode])
  
    
    return (
        <ImageBackground source={require("../img/thailand.webp")} style={styles.backdrop}>
            <Text>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
       
        fontSize: 45,
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        opacity: 0.75,
    },
    
})