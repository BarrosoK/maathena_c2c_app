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
const notfoundimg = require('../assets/img/404.png');

const NotFoundScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handlechangepasswordPress = () => navigate('settingtab',{ screen: 'changepassword' });
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.div}>
          <Image  alt="successimg" source={notfoundimg} />
          <View>
          <Text style={styles.title}>Oups !</Text>
          <Text style={styles.paragraph}>Cette page est introuvable</Text>
          <TouchableOpacity style={styles.bouton} onPress={handlechangepasswordPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Modifier mon mot de passe</Text>
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
    fontSize: 37.9,
    lineHeight:47.6,
    fontWeight: '600',
    marginTop:40,
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
    paddingTop:107,
    paddingLeft:20,
    paddingRight:24
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  paragraph: {
    color: "#000000",
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
    marginTop:10,
    textAlign:'center',
    letterSpacing:1
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:73,
  },
  group : {
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minWidth:331,
  },
  
});

export default NotFoundScreen;