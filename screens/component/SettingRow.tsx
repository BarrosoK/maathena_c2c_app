import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
const detail_icon = require('../../assets/img/back_arrow.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        paddingBottom:23,
        paddingLeft:15,
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight:'400',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        textAlign: 'left' 
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 14,
        justifyContent: 'flex-start',
        textAlign:'left'
    },
    iconsize:{
        height:26,
        width:26,
        objectFit:"contain"

    },    
});

const SettingRow = ({ title, image_url }) => (
    
    <View style={styles.container}>
        <Image source={image_url} style={styles.iconsize}/>
        <View style={styles.container_text}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View>
        <Image source={detail_icon} />
        </View>
    </View>
    
);

export default SettingRow;