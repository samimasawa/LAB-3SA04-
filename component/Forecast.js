import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props){
    let img = "";
  if (props.name == "Hat Yai") {
    img = require("../img/hatyai.jpg");
  }
  if (props.name == "Trang") {
    img = require("../img/trang.jpeg");
  }
  if (props.name == "Chiang Mai") {
    img = require("../img/chiangmia.jpg");
  }
  if (props.name == "Khon Kaen") {
    img = require("../img/khon.jpg");
  }
  if (props.name == "Chaophraya Surasak") {
    img = require("../img/chon.jpg");
  }
  if (props.name == "Yala") {
    img = require("../img/Yala.jpg");
  }
  if (props.name == "Bangkok") {
    img = require("../img/Bankkok.jpg");
  }
  if (props.name == "Rangsit") {
    img = require("../img/Rangsit.jpg");
  }
  if (props.name == "Phitsanulok") {
    img = require("../img/Phitsanulok.jpg");
  }
    return(
        <View>
            <Text style={styles.head}>{props.name}</Text>
            <View><Image source={img} style={styles.img}></Image></View>
            <Text style={styles.tem}>{props.description}</Text>
             <Text style={styles.pre}>pressure: {props.pressure} Pa</Text>
            <Text style={styles.tem}>temp :{props.temp}°C,</Text>
            <Text style={styles.feel}>feels like{"\n"}{props.feels_like}°C</Text>
            <Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    head: {
        fontSize: 30,
        backgroundColor: "black",
    color: "white",
    paddingTop: 5,
    textAlign: "center",
    opacity: 1,
    },
    tem: {  
        backgroundColor: "white",
        fontSize: 30,
        color: "black",
        paddingTop: 15,
        
        textAlign: "center",
        opacity: 0.75,
    },
    feel: {  
            backgroundColor: "white",
            fontSize: 20,
            color: "black",
            paddingTop: 35,
            textAlign: "center",
            opacity: 0.75,

    },
    pre: {  
        backgroundColor: "white",
        fontSize: 20,
        color: "black",
        paddingTop: 5,
        textAlign: "center",
        opacity: 0.75,

},
    img: {
        top: 0,
        width: 340,
        height: 190,
      },
})