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
const circleimg = require('../assets/img/error.png');

const OtpInvalidMsgScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSignupPress = () => navigate('Login');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.div}>
          <Image  alt="successimg" source={circleimg} />
          <View>
          <Text style={styles.title}>Erreur</Text>
          <Text style={styles.paragraph}>Le code entré n’est pas valide.</Text>
          <TouchableOpacity style={styles.bouton} onPress={handleSignupPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Retour</Text>
          </View>
          </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:41.1,
    fontWeight: '500',
    marginTop:35,
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
    paddingTop:129,
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20
  },
  paragraph: {
    color: "#000000",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop:5,
    textAlign:'center',
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:40,
    
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

export default OtpInvalidMsgScreen;