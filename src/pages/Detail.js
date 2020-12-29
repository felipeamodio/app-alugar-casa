import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import SwiperComponent from './components/Swiper';
import Stars from 'react-native-stars';

export default function Detail(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent />
            </View>

            <View style={styles.headerContent}>
                <View style={{width: '65%'}}>
                    <Text style={styles.house}>Casa de Praia</Text>
                </View>

                <View style={{width: '35%'}}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Stars default={4} //vai começar com 4 estrelas 
                               count={5} //vai ter no máximo 5 estrelas
                               half={true} //pode habilitar a estrela pela metade
                               starSize={25}
                               fullStar={ <Ionicons name="md-star" size={27} style={styles.myStarstyle} />} //quando tiver toda preenchida
                               emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarstyle} /> } //a estrela q não foi preenchida
                               halfStar={ <Ionicons name="md-star-half" size={24} style={styles.myStarstyle} /> }
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.price}>
                R$1.200,00
            </Text>
            <Text style={styles.description}>
                Casa dentro do condomínio, lugar seguro e monitorado 24h, muita área de lazer e próximo a praia.
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding: 15, marginTop: 35}}>
                <View style={styles.slide}>
                    <Image source={require('../assets/casa5.png')}
                           style={{width: 90, height: 90, borderRadius: 8}} />
                </View>

                <View style={styles.slide}>
                    <Image source={require('../assets/casa3.png')}
                           style={{width: 90, height: 90, borderRadius: 8}} />
                </View>

                <View style={styles.slide}>
                    <Image source={require('../assets/apt1.png')}
                           style={{width: 90, height: 90, borderRadius: 8}} />
                </View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    swiperContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%'
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4F4A4A',        
    },
    rating: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 15,
        color: '#4F4A4A'
    },
    myStarstyle: {
        color: '#E7A74E',
        backgroundColor: null,
        textShadowColor: '#000000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
    price: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#000000'
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#B3AEAE',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        height: 90,
        width: 90,
        borderRadius: 8,
        marginRight: 20
    }
})