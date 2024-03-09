import React,{Component} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingBottom:4,
        paddingLeft:17,
        paddingRight:11,
        paddingTop:5,
        alignItems: 'center',
        justifyContent:'flex-start',
        marginBottom: 12,
        gap:15,
        minHeight: 56
    },
    label: {
        fontSize: 10,
        color: '#878787',
        fontWeight:'400',
        fontFamily:'Work Sans',
        textAlign: 'left',
    },
    value: {
        fontSize: 14.5,
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
    bottomcontainer:{
        display:'flex',
        alignItems:'flex-end',
        gap:11
    },
    editbtn:{
        backgroundColor: '#FFC309',
        borderRadius:8,
        paddingVertical: 3,
        paddingHorizontal:15,
    },
    btntext:{
        fontSize: 12,
        color:'#084442',
        fontWeight:'500',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        textAlign:'center',
        letterSpacing:1
    }
});

export default class ProfileRow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image_url} style={styles.iconsize}/>
                <View style={styles.container_text}>
                {
                this.props.label?
                    <Text style={styles.label}>{this.props.label}</Text>:''
                }
                    <Text style={styles.value}>{this.props.value}</Text>
                </View>
                <View style={styles.bottomcontainer}>
                {
                this.props.editable?
                <TouchableOpacity style={styles.editbtn} onPress={this.props.onPress}>
                    <Text style={styles.btntext}>Modifier</Text>
                    </TouchableOpacity>:''
                }
                </View>
            </View>
        )
    }
}
