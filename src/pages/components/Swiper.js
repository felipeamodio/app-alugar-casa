import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';


//aquele efeito de passar as imagens
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
           }} //estilização das bolinhas
           activeDotColor="#FFFFFF" //qual a cor q vai ser quando ela estiver ativa
           activeDotStyle={{
               borderColor: '#000000',
               borderWidth: 1,
               width: 10,
               height: 10,
               borderRadius: 10
           }}
           >
            <View style={styles.slide}>
                <Image source={require('../../assets/casa1.png')}
                       style={{width: '100%', height: 350}} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../../assets/sala1.png')}
                       style={{width: '100%', height: 350}} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../../assets/quarto1.png')}
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