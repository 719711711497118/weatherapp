import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View elevation={25}  style= {[styles.searchBar,{backgroundColor: 'lightgray'}]}>
            <TextInput 
                placeholder='Enter City Name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name="search" size={28} color="black"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 85,
        marginBottom: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    
        borderColor: 'lightgrey',
        shadowColor: 'black',
        shadowOffset: {
	            width: 0,
	            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    }
})
