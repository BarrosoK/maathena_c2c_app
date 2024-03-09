import React,{Component} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
const back_arrow = require('../../assets/img/back_arrow.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingBottom:12,
        paddingLeft:17,
        paddingRight:17,
        paddingTop:15,
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 12,
        height:56
    },
    value: {
        fontSize: 16,
        color: '#1B1B1B',
        fontWeight:'400',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        textAlign: 'left',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent:'center',
    },
    shadowProp: {
        shadowColor: '#0000000F',
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
    }, 
});

export default class SupportRow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={[styles.container,styles.shadowProp]}>
                <Text style={styles.value}>{this.props.label}</Text>
                <TouchableOpacity style={styles.editbtn} onPress={this.props.onPress}>
                <Image source={back_arrow} style={styles.iconsize}/>
                </TouchableOpacity>
            </View>
        )
    }
}
