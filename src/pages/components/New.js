import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function New(props) {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image
            source={props.cover}
            style={styles.cover}
        />

        <View style={styles.content}>
            <Text style={styles.title}>{props.name}</Text>

            <View style={styles.dot}>
            </View>

            <Text style={styles.badge}>Novo</Text>
        </View>

        <Text style={styles.description}>
            {props.description}
        </Text>

        <View style={styles.footer}>
            <View style={{width: '80%'}}>
                <Text style={styles.price}>R${props.price}</Text>
            </View>
            <View style={{width: '20%'}}>
                <Ionicons name="ios-add-circle" size={24} color="#000000" />
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#F5F5F5',
        width: 200,
        height: 250,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
        color: '#4F4A4A'
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#FF0000',
        marginHorizontal: 4
    },
    badge: {
        color: '#FF0000',
        fontSize: 9,
        fontFamily: 'Montserrat_700Bold'
    },
    description: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 9,
        color: '#4F4A4A'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    },
    price: {
        fontSize: 15,
        fontFamily: 'Montserrat_700Bold'
    }
})



