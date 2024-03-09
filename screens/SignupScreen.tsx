import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
const googleimg = require('../assets/img/google.png');
const appleimg = require('../assets/img/apple.png');
const fbimg = require('../assets/img/facebook_ic.png');

const SignupScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSignupPress = () => navigate('Login');
   const handleVerifyOtpPress = () => navigate('VerifyOtp');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <View style={{gap: 12,display:'flex',alignItems:'center',justifyContent: 'center'}}>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              textContentType="username"
              placeholder= "Nom"
            />
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              placeholder= "Prénom"
            />
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              keyboardType="email-address"
              placeholder= "E-mail"
            />
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              placeholder= "Téléphone"
            />
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              placeholder= "Mot de passe"
            />
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              placeholder= "Confirmer le mot de passe"
            />
          </View>
        </View>
        
        <View>
          <TouchableOpacity style={styles.bouton} onPress={handleVerifyOtpPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>S’inscrire</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignupPress}>
          <Text style={styles.registertext}>Déjà membre ? Se connecter</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.socialtextgroup}>
          <View style={styles.borderstyle} />
          <Text style={styles.socialtext}>S’inscrire avec</Text>
          <View style={styles.borderstyle}/>
        </View>
        <View style={styles.bottombuttons}>
          <TouchableOpacity style={styles.loginwithbtn} onPress={handleSignupPress}>
            <View style={styles.btnsgroup}>
            <Image   alt="fbimg" source={fbimg} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginwithbtn} onPress={handleSignupPress}>
            <View style={styles.btnsgroup}>
              <Image   alt="googleimg" source={googleimg} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginwithbtn} onPress={handleSignupPress}>
            <View style={styles.btnsgroup}>
            <Image   alt="appleimg" source={appleimg} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
borderstyle: {
  backgroundColor:'#DDDDDD',
  height: 1,
  flex: 1,
  alignSelf: "center",
},
socialtext : {
  textAlign:'center',
  lineHeight:28,
  fontSize:16,
  fontWeight:'400',
  fontFamily: 'Work Sans',
  alignSelf: 'center',
  paddingHorizontal: 5,
},
socialtextgroup: {
  flexDirection: "row",
  width: "100%",
  alignSelf: "center",
  justifyContent:'space-between',
  marginTop: 32,
  marginBottom:10,
},
bottombuttons : {
  gap: 8,
  alignItems:'center',
  justifyContent: 'space-between',
  flexDirection:'row',
},
btntext: {
  fontSize:16,
  color:'#fff',
  fontWeight:'500',
  fontFamily: 'Work Sans',
  lineHeight: 20,
},
registertext: {
  color: "#084442",
  fontWeight: '400',
  fontSize: 12,
  fontFamily: 'Work Sans',
  lineHeight: 24,
  marginTop:3,
  textAlign: 'center',
},
inputbox: {
  borderColor: "#084442",
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
  marginTop: 15,
  marginLeft: 18,
  marginBottom:12,
  fontWeight: '400',
  fontSize: 16,
  fontFamily: 'Work Sans',
  lineHeight: 21,
},
container: {
  flex: 1,
  backgroundColor: "#fff",
  paddingTop: StatusBar.currentHeight,
  width: '100%',
},
div: {
  backgroundColor: '#ffffff',
  width: '100%',
  padding: 22,
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
loginwithbtn: {
  backgroundColor: '#fff',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderColor:'#DDDDDD',
  borderWidth:1,
},
group : {
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  gap:10,
  display: 'flex',
  flexDirection: 'row',
  width: 134,
},
btnsgroup: {
  paddingBottom:16,
  paddingTop:16,
  paddingLeft:40,
  paddingRight:40
},
});

export default SignupScreen;