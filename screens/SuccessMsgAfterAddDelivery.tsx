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

const SuccessMsgAfterAddDelivery = (props:any) => {
   let { navigate } = props.navigation;
   const handleHomePress = () => navigate('Accueil');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.div}>
          <Image  alt="successimg" source={successimg} />
          <View>
          <Text style={styles.title}>Livraison programmée !</Text>
          <Text style={styles.paragraph}>Notre livreur viendra récupérer votre colis lundi 5 octobre à 10h00. Votre présence est nécessaire. Votre colis sera livré le mardi 6 octobre à 17h00.</Text>
          <TouchableOpacity style={styles.bouton} onPress={handleHomePress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Retour à l’accueil</Text>
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
    paddingTop:113,
    padding:22
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
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop:7,
    textAlign:'center',
    paddingLeft:20,
    paddingRight:17
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
  },
  
});

export default SuccessMsgAfterAddDelivery;