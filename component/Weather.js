import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main',
        description: 'Description',
        temp: 0
        }) 
    
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
       
        fontSize: 25,
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})