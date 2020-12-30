import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import SwiperComponent from './components/SwiperFloripa';
import Stars from 'react-native-stars';

export default function Floripa(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent />
            </View>

            <View style={styles.headerContent}>
                <View style={{width: '65%'}}>
                    <Text style={styles.house}>Casa em Floripa</Text>
                </View>

                <View style={{width: '35%'}}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Stars default={5} //vai começar com 4 estrelas 
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
                R$2.550,00
            </Text>
            <Text style={styles.description}>
            Casa aconchegante, 3 quartos com suíte, piscina, vaga para 4 carros e churrasqueira.
            </Text>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={[styles.btn, {padding: 15, marginTop: 35}]}>
                <Text style={styles.btnTxt}>ALUGAR</Text>
            </TouchableOpacity>
        </View>
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
        color: '#FFD700',
        textShadowColor: '#000000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2
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
    btn: {
        width: '85%',
        height: 50,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10%',
        borderRadius: 8
        
    },
    btnTxt: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 17
    }
})