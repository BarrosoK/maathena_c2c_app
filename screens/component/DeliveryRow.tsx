import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const detail_icon = require('../../assets/img/leftarrow.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: 11,
        backgroundColor: '#FFF',
        columnGap:25,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 16,
        lineHeight:28.6,
        color: '#1B1B1B',
        fontWeight:'400',
        fontFamily:'Work Sans'
    },
    subtitle: {
        fontSize: 12,
        lineHeight:28.6,
        color: '#878787',
        fontWeight:'400',
        fontFamily:'Work Sans',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-start',
        paddingRight: 51
    },
    description: {
        fontSize: 14.5,
        lineHeight: 17,
        color: '#878787',
        fontFamily: 'Work Sans',
        
        marginTop: 5
    },
    photo: {
        height: 39,
        width: 39,
    },
});

const DeliveryRow = ({ title, description, image_url , subtitle}) => (
    <View style={styles.container}>
        <Image source={image_url} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
);

export default DeliveryRow;