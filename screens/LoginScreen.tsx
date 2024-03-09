import React,{useState} from "react";
import {
  StatusBar,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const exampleImage = require('../assets/img/rectangle-409.png');
const rectangle_411 = require('../assets/img/rectangle_411.png');
const vector191 = require('../assets/img/vector-191.png');
const vector190 = require('../assets/img/vector-190.png');
const userimg = require('../assets/img/codicon_account.png');
const passimg = require('../assets/img/passimg.png');
const googleimg = require('../assets/img/google.png');
const appleimg = require('../assets/img/apple.png');
const eyeimg = require('../assets/img/visible.png');
import { useTogglePasswordVisibility } from './component/useTogglePasswordVisibility';

const LoginScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleBtnPress = () => navigate('Login');
   const handleSignupPress = () => navigate('Inscription');
   const handleforgotPress = () => navigate('Forgot');
   const handleLoginBtnPress = () => navigate('Dashboard');
   const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();

   StatusBar.setHidden(true);
  return (
    <View style={styles.container}> 
      <ImageBackground source={exampleImage} style={styles.login_rectangle} resizeMode="cover">
      <Image  style={styles.overlayimage} alt="Vector" source={rectangle_411} /> 
        <View style={styles.logintextwrapper}>
            <Text style={styles.loginText}>Bienvenue</Text>
            <View style={styles.loginvector1}> 
            <Image  style={styles.image} alt="Vector" source={vector190} />
            <Image style={styles.image} alt="Vector" source={vector191} />
            </View>
        </View>
        </ImageBackground>
        <ScrollView style={styles.div}> 
        <View style={{gap: 17,display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <View style={styles.inputbox}>
        <Image style={styles.uservector} source={userimg} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.textbox}
            textContentType="username"
            placeholder= "Identifiant"
          />
        </View>
        <View style={styles.inputbox}>
        <Image style={styles.lockvector} source={passimg} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            style={styles.textbox}
            secureTextEntry={passwordVisibility}
            textContentType="newPassword"
            placeholder= "Mot de passe"
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
          <Image style={{ marginBottom:16,marginLeft: 17,marginTop: 19,marginRight:13}}  source={eyeimg}/>
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity  onPress={handleforgotPress}>
        <View>
        <Text style={styles.forgottext}>Mot de passe oublié?</Text>
        </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.bouton} onPress={handleLoginBtnPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Se connecter</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleSignupPress}>
          <Text style={styles.registertext}>Vous n’avez pas de compte ? Inscrivez-vous</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottombuttons}>
          <TouchableOpacity style={styles.loginwithbtn} onPress={handleBtnPress}>
          <View style={styles.btnsgroup}>
          <Image style={styles.googleimage}  alt="googleimg" source={googleimg} />
          <Text style={styles.loginwithbtntext}>Se connecter avec Google</Text>
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginwithbtn} onPress={handleBtnPress}>
          <View style={styles.btnsgroup}>
          <Image style={styles.appleimage}  alt="appleimg" source={appleimg} />
          <Text style={styles.loginwithbtntext}>Se connecter avec Apple</Text>
          </View>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  
bottombuttons : {
  marginTop: 48,
  gap: 12,
  alignItems:'center',
  justifyContent: 'center'
},  
loginwithbtntext : {
  fontSize:16,
  color:'#1B1B1B',
  fontWeight:'400',
  fontFamily: 'Work Sans',
  lineHeight: 28.6,
},
btntext :{
  fontSize:16,
  color:'#fff',
  fontWeight:'500',
  fontFamily: 'Work Sans',
  lineHeight: 20,
},
registertext: {
  color: "#084442",
  fontWeight: '400',
  fontSize: 14,
  fontFamily: 'Work Sans',
  lineHeight: 28.6,
  marginTop:7,
  marginLeft:5,
  marginRight: 24,
  textAlign: 'center',
},
forgottext:{
  color: "#084442",
  textAlign: 'right',
  fontWeight: '400',
  fontSize: 16,
  fontFamily: 'Work Sans',
  lineHeight: 28.6,
  marginTop:8,
  marginBottom: 26
},
login_rectangle: {
  height: 309,
  width: '100%',
  flex: 1,
  justifyContent: 'center',
},
loginvector1: {
  height: 188,
  left: 0,
  position: 'absolute',
  top: 188,
  width: '100%',
},
emailinput: {
  height:56,
  width:333,
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
uservector: {
  width:21,
  height:21,
  marginBottom:16,
  marginLeft: 17,
  marginTop: 19,
  marginRight:13,
},
lockvector: {
  width:21,
  height:27,
  marginBottom:16,
  marginLeft: 17,
  marginTop: 19,
  marginRight:13,
},
textbox: {
  color:'#084442',
  textAlign: 'left',
  flex: 1,
  marginTop: 19,
  marginBottom: 16,
  fontWeight: '400',
  fontSize: 16,
  fontFamily: 'Work Sans',
  lineHeight: 21,
},
login_overlay_img: {
  height: 64,
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
},
logintextwrapper: {
  position: 'absolute',
  top: 0,
  left:0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center', 
  bottom: 0,
},
loginText : {
  color:'white',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: 30,
  fontWeight:'500',
  lineHeight:41.1,
  zIndex: 9999,
  position: 'absolute',
  top: '12%',
  left:0,
  right: 0,
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
  top:280,
  width: '100%',
  padding: 22,
},
vector: {
  height: 188,
  left: 0,
  position: 'absolute',
  top: 415,
  width: '100%',
},
bouton:{
  backgroundColor: '#084442',
  borderRadius: 6,
  height: 56,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
},
loginwithbtn:{
  backgroundColor: '#fff',
  borderRadius: 8,
  height: 56,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderColor:'#08444233',
  borderWidth:1,
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
image: {
  width: '100%',
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
  alignItems: "flex-start",
  justifyContent: 'space-between',
  gap:43,
  display: 'flex',
  flexDirection: 'row',
},
googleimage: {
  height: 23.64,
  width: 23.64
},
appleimage: {
  height:26.01,
  width:21.12
}
});

export default LoginScreen;