import React from 'react'
import { View } from 'react-native'
import Weather from '../component/Weather'

export default function WeatherScreen({route}){
    return (
        <View>
            <Weather zipCode={route.params.zipCode}/>
        </View>
    )
}