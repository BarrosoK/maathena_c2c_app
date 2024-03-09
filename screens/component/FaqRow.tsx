import React,{Component} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
const bottom_arrow = require('../../assets/img/bottom_arrow.png');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingBottom:12,
        paddingLeft:18,
        paddingRight:17,
        paddingTop:12,
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 12,
    },
    value: {
        fontSize: 16,
        color: '#1B1B1B',
        fontWeight:'400',
        fontFamily:'Work Sans',
        textAlign: 'left',
    },
    highlightvalue:{
        fontSize: 16,
        color: '#111111',
        fontWeight:'600',
        fontFamily:'Work Sans',
        textAlign: 'left',
    },
    shadowProp: {
        shadowColor: '#0000000F',
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
    }, 
    child:{
        backgroundColor: '#fff',
        paddingTop:9
    },
    editbtn:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        width:'100%',
        alignItems:'center',
    },
    desc:{
        fontSize: 14,
        color: '#1B1B1B',
        fontWeight:'400',
        fontFamily:'Work Sans',
        lineHeight: 24,
        textAlign: 'left',
    }
});

export default class FaqRow extends Component{
    constructor(props){
        super(props)
        this.state = { 
            data: props.data,
            expanded : false,
          }
          if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render(){
        return(
            <View style={[styles.container,styles.shadowProp]}>
                <TouchableOpacity style={styles.editbtn} onPress={()=>this.toggleExpand()}>
                <Text style={this.state.expanded ? styles.highlightvalue : styles.value}>{this.props.label}</Text>
                <Image source={this.state.expanded ? bottom_arrow : bottom_arrow}/>
                </TouchableOpacity>
                
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text style={styles.desc}>{this.props.data}</Text>    
                </View>
            }
            </View>
        )
    }
    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
      }
}
