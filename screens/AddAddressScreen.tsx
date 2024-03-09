import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const AddAddressScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleAddPress = () => navigate('address');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
            <View style={styles.boxbackground}>
            <Text style={styles.title}>Nouvelle adresse</Text>
                <View style={{gap: 18,display:'flex',alignItems:'center',justifyContent: 'center'}}>
                <View style={styles.inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholderTextColor= '#08444280'
                    style={styles.textbox}
                    textContentType="username"
                    placeholder= "Nom de l’adresse"
                    />
                </View>
                <View style={styles.inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    placeholderTextColor= '#08444280'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Numéro de rue et voie"
                    />
                </View>
                <View style={styles.inlinebox}>
                    <View style={styles.inputbox}>
                        <TextInput
                        autoCapitalize="none"
                        placeholderTextColor= '#08444280'
                        autoCorrect={false}
                        returnKeyType="next"
                        style={styles.textbox}
                        placeholder= "Code postal"
                        />
                    </View>
                    <View style={styles.inputbox}>
                        <TextInput
                        autoCorrect={false}
                        placeholderTextColor= '#08444280'
                        returnKeyType="next"
                        style={styles.textbox}
                        placeholder= "Ville"
                        />
                    </View>
                </View>
                </View>
                <View>
                <TouchableOpacity style={styles.bouton} onPress={handleAddPress}>
                <View style={styles.group}>
                <Text style={styles.btntext}>Enregistrer l’adresse</Text>
                </View>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
inlinebox:{
  display:'flex',
  flexDirection:'row',
  gap: 12
},
boxbackground :{
    backgroundColor: "#FFFFFF99",
    paddingTop:20,
    paddingBottom:30,
    paddingLeft:22,
    paddingRight:23,
    borderRadius:10,
    
},
title:{
    lineHeight:28.6,
    fontSize:16,
    fontWeight:'400',
    fontFamily: 'Work Sans',
    alignSelf: 'flex-start',
    color:"#111111",
    marginBottom:15,
},

btntext: {
  fontSize:16,
  color:'#ffffff',
  fontWeight:'500',
  fontFamily: 'Work Sans',
  lineHeight: 20,
  letterSpacing:1
},

inputbox: {
  borderColor: "#08444280",
  borderWidth: 1,
  width: '100%',
  borderRadius:8,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
textbox: {
  color:'#084442',
  textAlign: 'left',
  flex: 1,
  marginTop: 18,
  marginLeft: 16,
  marginBottom:18,
  fontWeight: '400',
  fontSize: 16,
  fontFamily: 'Work Sans',
  lineHeight: 20,
},
container: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  width: '100%',
 
},
div: {
  width: '100%',
  padding: 21,
  backgroundColor: "transparent",
},
bouton: {
  backgroundColor: '#084442',
  borderRadius: 6,
  height: 56,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop:26
},

group : {
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  gap:10,
  display: 'flex',
  flexDirection: 'row',
},

});

export default AddAddressScreen;