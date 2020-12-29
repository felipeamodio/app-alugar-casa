import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function Recommended(props) {
 return (
   <ImageBackground source={props.cover} 
                    style={[styles.container, styles.shadow]}
                    blurRadius={2}>
       <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
       <Text style={[styles.offer, styles.shadow]}>{props.offer}</Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        marginRight: 20,
        marginBottom: 40,
        opacity: 0.7,
        backgroundColor: '#000000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20
    },
    house:{
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        fontSize: 15
    },
    offer: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF'
    },
    shadow: {
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3,
        textShadowColor: '#000000'
    }
})
    