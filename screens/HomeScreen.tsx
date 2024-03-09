import React from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
const exampleImage = require('../assets/img/rectangle-409.png');
const rectangle_411 = require('../assets/img/rectangle_411.png');
const vector191 = require('../assets/img/vector-191.png');
const vector190 = require('../assets/img/vector-190.png');
const rectangle = require('../assets/img/rectangle-406.png');
const groupwhite = require('../assets/img/group_white.png');
const groupcolor = require('../assets/img/group_color.png');

const HomeScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleBtnPress = () => navigate('Login');
   const handleSignupPress = () => navigate('Inscription');
   StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <ImageBackground source={exampleImage} style={styles.rectangle} resizeMode="cover">
      <Image  style={styles.overlayimage} alt="Vector" source={rectangle_411} /> 
        <View style={styles.imgwrapper}>
            <Image style={styles.img} alt="Rectangle" source={rectangle} />
            <View style={styles.vector}> 
            <Image  style={styles.image} alt="Vector" source={vector190} />
            <Image style={styles.image} alt="Vector" source={vector191} />
            </View>
        </View>
        </ImageBackground>
       
        <ScrollView style={styles.div}>
        <View style={{gap: 17,display:'flex',alignItems:'center',justifyContent: 'center'}}>          
        <Text style={styles.title}>Service de livraison</Text>
        <Text style={styles.subtitle}>Effectuez vos livraisons en un clic à moindre frais !</Text>
          <TouchableOpacity style={styles.bouton} onPress={handleBtnPress}>
          <View style={styles.group}>
          <Text style={styles.text}>Se connecter</Text>
          <Image style={styles.group2}  alt="Group" source={groupwhite} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bouton3} onPress={handleSignupPress}>
          <View style={styles.group}>
          <Text style={styles.text2}>S’inscrire</Text>
          <Image style={styles.group2}  alt="Group" source={groupcolor} />
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
imgwrapper: {
    position: 'absolute',
    top: 0,
    left:0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 
    bottom: 0,
},  
overlayimage:{
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left:0,
    right: 0,
    position: 'absolute',
    width: '100%',
},  
container: {
  flex: 1,
  backgroundColor: "#fff",
  paddingTop: StatusBar.currentHeight,
  width: '100%',
},
div: {
  backgroundColor: '#ffffff',
  position: 'absolute',
  top:519,
  width: '100%',
  padding: 24,
},
vector: {
  height: 188,
  left: 0,
  position: 'absolute',
  top: 415,
  width: '100%',
},
rectangle:{
  height: 519,
  width: '100%',
  flex: 1,
  justifyContent: 'center',
},
bouton:{
  backgroundColor: '#084442',
  borderRadius: 6,
  height: 56,
  width: 327,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
},
text: {
  color:'white',
  textAlign: 'center',
  fontWeight: '500',
  fontSize:16,
  lineHeight: 20,
  height: 20,
  fontFamily:'Work Sans',
},
bouton3: {
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#084442',
  borderRadius: 6,
  height: 56,
  width: 327,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
},
text2: {
  color:'#084442',
  textAlign: 'center',
  fontFamily:'Work Sans',
  fontWeight: '500',
  fontSize:16,
  lineHeight: 20,
},
title: {
  color: '#084442',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: 21.3,
  lineHeight:41.1,
  fontWeight: '500',
},
subtitle: {
  color: '#084442',
  fontFamily:'Work Sans',
  fontSize: 14.5,
  fontWeight: '400',
  letterSpacing: 0,
  lineHeight: 24,
  textAlign: 'center',
  marginBottom: 12,
  maxWidth: 290
},
img: {
  height: 64,
  width: 196,
  bottom:100
},
image: {
  width: '100%',
  position: 'absolute',
},
group2 : {
  height: 13,
  width: 16,
},
group : {
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  gap:10,
  display: 'flex',
  flexDirection: 'row',
  width: 134,
}

});

export default HomeScreen;