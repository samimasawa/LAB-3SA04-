import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110',pic: require("../img/hatyai.jpg") },
    { place: 'Trang', code: '92000', pic: require("../img/trang.jpeg")},
    { place: 'Chiangmai', code: '50000', pic: require("../img/chiangmia.jpg")},
    { place: 'Khonkaen', code: '40000', pic: require("../img/khon.jpg")},
    { place: 'Chonburi', code: '20000', pic: require("../img/chon.jpg")},
    { place: 'Yala', code: '94000', pic: require("../img/Yala.jpg")},
    { place: 'Bankkok', code: '10100', pic: require("../img/Bankkok.jpg")},
    { place: 'Rangsit', code: '25000', pic: require("../img/Rangsit.jpg")},
    { place: 'Phitsanulok', code: '64000', pic: require("../img/Phitsanulok.jpg")},
   ]
   
const ZipItem = ({ place, code, navigation, pic}) => (
    <TouchableHighlight 
    onPress={() => navigation.navigate('Weather', {zipCode: code})
    }>
        <View style={styles.layout}>
      <ImageBackground source={pic} style={styles.backdrop}></ImageBackground>
      <Text style={{ textAlign: "center", backgroundColor: "#9999FF" }}>
        {place}
      </Text>
      <Text style={{ textAlign: "center", backgroundColor: "#99CCFF" }}>
        {code}
      </Text>
      
    </View>
    </TouchableHighlight>
   
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item})=> <ZipItem {...item} navigation={navigation}/>}
            />
    )
}

const styles = StyleSheet.create({
    zipItem:{
        flex: 1,
        paddingTop: 80,
        flexDirection: 'row',
        backgroundColor: "brown",
        justifyContent: 'space-around'
    },
    zipPlace:{
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    head: {
        textAlign: "center",
       
        
        },
        backdrop: {
            flexDirection: "column",
            alignItems: "center",
            width: 415,
            height: 100,
        },
})