import React,{Component} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
const detail_icon = require('../../assets/img/leftarrow.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: 11,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        borderBottomWidth:1,
        borderColor: '#D4D4D4',
        columnGap:19,
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#000',
        fontWeight:'500',
        fontFamily:'Work Sans',
        marginBottom:12 
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color:'#878787'
    },
    photo: {
        height: 39,
        width: 39,
    },
});

export default class DashboardDeliveryRow extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <View style={styles.container}>
                <Image source={this.props.image_url} style={styles.photo} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.description}>
                        {this.props.subtitle} . {this.props.description}
                    </Text>
                </View>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View>
                        <Image source={detail_icon} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}