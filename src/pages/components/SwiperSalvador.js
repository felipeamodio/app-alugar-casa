import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent() {
 return (
   <Swiper style={styles.wrapper}
           dotStyle={{
            backgroundColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10
           }}
           activeDotColor="#FFFFFF"
           activeDotStyle={{
            borderColor: '#000000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10
           }} >
        
        <View style={styles.slide}>
                <Image source={require('../../assets/casa3.png')}
                       style={{width: '100%', height: 350}} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../../assets/area3.png')}
                       style={{width: '100%', height: 350}} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../../assets/quartoo2.png')}
                       style={{width: '100%', height: 350}} />
            </View>
   </Swiper>
  );
}

const styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})