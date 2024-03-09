import React,{Component} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
const trash = require('../../assets/img/trash.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#B9E6C999',
        paddingBottom:13,
        paddingLeft:22,
        paddingRight:11,
        paddingTop:18,
        alignItems: 'center',
        justifyContent:'flex-start',
        marginBottom: 12,
        gap:19
    },
    title: {
        fontSize: 16,
        color: '#084442',
        fontWeight:'500',
        fontFamily:'Work Sans',
        lineHeight: 20,
        textAlign: 'left',
        letterSpacing:1
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 14.5,
        color:'#111111',
        fontWeight:'400',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        letterSpacing:1
    },
    iconsize:{
        height:32,
        width:31,
        objectFit:"contain"
    },
    bottomcontainer:{
        display:'flex',
        alignItems:'flex-end',
        gap:11
    },
    editbtn:{
        backgroundColor: '#fff',
        borderColor:'#084442',
        borderWidth:1,
        borderRadius:8,
        paddingVertical: 3,
        paddingHorizontal:15,
        width:100
    },
    addressgroup:{
        display:'flex'
    },
    addressgroup2:{
        display:'flex',
        flexDirection:'row',
        gap:5
    },
    btntext:{
        fontSize: 12,
        color:'#084442',
        fontWeight:'500',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        textAlign:'center',
        letterSpacing:1
    },
    trashicon:{
        height:17,
        width:17
    }
});

export default class AddressRow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image_url} style={styles.iconsize}/>
                <View style={styles.container_text}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View >
                        <View style={styles.addressgroup}>
                            <Text style={styles.description}>{this.props.address}</Text>
                            <View style={styles.addressgroup2}>
                                <Text style={styles.description}>{this.props.codepostal}</Text>
                                <Text style={styles.description}>{this.props.ville}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomcontainer}>
                <Image style={styles.trashicon} source={trash} />
                <TouchableOpacity style={styles.editbtn} onPress={this.props.onPress}>
                    <Text style={styles.btntext}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
