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

const ContactSupportScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSuccessPress = () => navigate('sucesscontact');
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
            <View style={styles.boxbackground}>
            <Text style={styles.title}>Pour nous contacter, merci de remplir le formulaire ci-dessous :</Text>
                <View style={{gap: 18,display:'flex',alignItems:'center',justifyContent: 'center'}}>
                <View style={styles.inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholderTextColor= '#08444280'
                    style={styles.textbox}
                    textContentType="username"
                    placeholder= "Nom"
                    />
                </View>
                <View style={styles.inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    placeholderTextColor= '#08444280'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Prénom"
                    />
                </View>
                
                <View style={styles.inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    placeholderTextColor= '#08444280'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Adresse e-mail"
                    />
                </View>
                <View style={styles.textAreaContainer}>
                    <TextInput
                    autoCorrect={false}
                    placeholderTextColor= '#08444280'
                    returnKeyType="next"
                    multiline = {true}
                    numberOfLines = {10}
                    style={styles.textArea}
                    placeholder= "Message"
                    />
                </View>
                </View>
                <View>
                <TouchableOpacity style={styles.bouton} onPress={handleSuccessPress}>
                <View style={styles.group}>
                <Text style={styles.btntext}>Envoyer</Text>
                </View>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
textAreaContainer: {
  borderColor: '#08444280',
  borderWidth: 1,
  paddingLeft: 16,
  paddingTop:13,
  borderRadius:8,
  width: '100%',
},
textArea: {
  height: 147,
  width:'100%',
  fontWeight: '400',
  fontSize: 16,
  fontFamily: 'Work Sans',
  lineHeight: 20,
  color:'#084442',
},
boxbackground :{
  backgroundColor: "#FFFFFF99",
  paddingTop:13,
  paddingBottom:34,
  paddingLeft:23,
  paddingRight:22,
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
  paddingRight:23
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
  paddingLeft: 21,
  paddingRight:23,
  paddingTop:21,
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

export default ContactSupportScreen;