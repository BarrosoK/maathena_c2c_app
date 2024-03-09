import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
const successimg = require('../assets/img/success.png');

const SuccessContactScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleHomePress = () => navigate('Accueil');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.div}>
          <Image  alt="successimg" source={successimg} />
          <View>
          <Text style={styles.title}>Message envoyé !</Text>
          <Text style={styles.paragraph}>Nous reviendrons vers vous dans les plus brefs détais.</Text>
          <TouchableOpacity style={styles.bouton} onPress={handleHomePress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Revenir à l’accueil</Text>
          </View>
          </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#084442',
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:41.1,
    fontWeight: '500',
    marginTop:26,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    paddingTop:94,
    paddingHorizontal:22
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  paragraph: {
    color: "#1B1B1B",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop:5,
    textAlign:'center',
    paddingLeft:13,
    paddingRight:14
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:54,
  },
  group : {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minWidth:331,
  },
  
});

export default SuccessContactScreen;