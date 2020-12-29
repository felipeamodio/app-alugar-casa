import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import New from './components/New';
import { useNavigation } from '@react-navigation/native';
import House from './components/House';
import Recommended from './components/Recommended';

function Home() {
    const navigation = useNavigation();
    
    return(
    <>
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFFFFF'}}>
        {/** Area de pesquisas */}
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput placeholder="O que está procurando?" style={styles.input} />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <New cover={require('../assets/casa1.png')}
                 name="Casa de Praia"
                 description="Casa dentro do condomínio, lugar seguro e monitorado 24h, muita área de lazer e próximo a praia."
                 onPress={() => navigation.navigate('Detail')} />

            <New cover={require('../assets/casa2.png')}
                 name="Casa em Floripa"
                 description="Casa aconchegante, 3 quartos com suíte, piscina, vaga para 4 carros e churrasqueira."
                 onPress={() => {}} />

            <New cover={require('../assets/casa3.png')}
                 name="Casa Salvador"
                 description="Casa espelhada com vista para o mar, lugar seguro, 2 quartos com suíte e piscina."
                 onPress={() => {}} />
            </ScrollView>


            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                <Text style={[styles.title, {marginTop: 20}]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}} >
               <House cover={require('../assets/apt1.png')} />
               <House cover={require('../assets/aptt2.png')} />
               <House cover={require('../assets/apt3.png')} />
            </ScrollView>

            <Text style={[styles.title, {marginTop: 20}]}>
                Dica do dia
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}} >
                <Recommended cover={require('../assets/casa4.png')}
                             house="Casa Fortaleza"
                             offer="20% OFF" />

                <Recommended cover={require('../assets/casa5.png')}
                             house="Rancho Lavrinhas"
                             offer="10% OFF" />

                <Recommended cover={require('../assets/casa6.png')}
                             house="Sítio Sorocaba"
                             offer="30% OFF" />
            </ScrollView>

        </ScrollView>
    </>
    )}

export default Home;


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#F5F5F5',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4F4A4A'
    }
})