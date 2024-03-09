import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground
} from 'react-native';
const propos_header = require('../assets/img/propos_header.png');
const Rapide = require('../assets/img/Rapide.png');
const Economique = require('../assets/img/Economique.png');
const Ecologique = require('../assets/img/Ecologique.png');
const propsalimage1 = require('../assets/img/propsalimage1.png');
const propsalimage2 = require('../assets/img/propsalimage2.png');
const Gradient = require('../assets/img/Gradient.png');

const ProposalScreen = (props:any) => {
   let { navigate } = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.div}>
        <View style={styles.firstrow}>
          <Text style={styles.header}>Qui sommes-nous ?</Text>
          <Image source={propos_header}></Image>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Maecenas id viverra ligula. 
            Nunc rutrum leo sit amet eros pellentesque, ut auctor dui suscipit. 
            Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum. 
            Cras eget maximus tortor,quis tincidunt eros. 
            Integer sit amet rutrum mauris.
          </Text>
          <Text style={styles.header}>Pourquoi Maathena ?</Text>
            <View style={styles.boxes}>
              <View style={styles.box}>
                <Image style={styles.box_icon} source={Rapide}></Image>
                <Text style={styles.box_title}>Rapide</Text>
              </View>
              <View style={styles.box}>
                <Image style={styles.box_icon} source={Economique}></Image>
                <Text style={styles.box_title}>Economique</Text>
              </View>
              <View style={styles.box}>
                <Image style={styles.box_icon} source={Ecologique}></Image>
                <Text style={styles.box_title}>Ecologique</Text>
              </View>
            </View>
            </View>
            <Text style={[styles.header,styles.overlayheader]}>Découvrez nos autres services !</Text>
            <View style={styles.bottomimages}>
              <ImageBackground source={propsalimage1} style={styles.overlaydiv} resizeMode="cover">
                <Image source={Gradient} style={styles.gradient}></Image>
                <Text style={styles.overlay_title}>BtoB & BtoC</Text>
              </ImageBackground>
              <ImageBackground source={propsalimage2} style={styles.overlaydiv} resizeMode="cover">
                <Image source={Gradient} style={styles.gradient}></Image>
                <Text style={styles.overlay_title}>Marketplace</Text>
              </ImageBackground>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingLeft: 21,
    paddingBottom:24
  },
  firstrow: {
    paddingRight:23
  },
  header: {
    color: "#084442",
    fontWeight: '600',
    fontSize: 21.3,
    fontFamily: 'Work Sans',
    lineHeight: 57.6,
    textAlign:'center',
    marginBottom:8
  },
  paragraph: {
    color: "#1B1B1B",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  overlayheader: {
    textAlign:'left'
  },
  boxes:{
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    gap: 13.08,
    marginBottom: 28
  },
  box:{
    backgroundColor:'#084442',
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    paddingBottom:7,
    paddingTop:21,
    minWidth:101.61,
    minHeight:101
  },
  box_icon: {
    height:35,
    width: 35,
    objectFit: 'contain',
  },
  box_title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
  },
  overlaydiv: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 26,
    paddingBottom:10.61,
    minHeight: 196.61,
  },
  gradient: {
    alignItems: 'flex-end',
    top: 0,
    left:0,
    right: 0,
    position: 'absolute',
    width: '100%',
  },
  bottomimages: {
    display:'flex',
    gap: 14.39,
    width:'100%'
  },
  overlay_title: {
    color: "#FFFFFF",
    fontWeight: '600',
    fontSize: 21.3,
    fontFamily: 'Work Sans',
    lineHeight: 57.6,
  }
});

export default ProposalScreen;