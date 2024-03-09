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
  TextInput,
} from 'react-native';
const eyeimg = require('../assets/img/visible.png');
import { useTogglePasswordVisibility } from './component/useTogglePasswordVisibility';

const ChangePasswordScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSuccessPress = () => navigate('Forgotsuccess');
   const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <View>
          <Text style={styles.title}>Pour créer un mot de passe sécurisé :</Text>
          <View style={styles.list}>
            <View style={styles.listitem}>
              <Text style={styles.paragraph}>{'\u2022'}</Text>
              <Text style={styles.paragraph}>{'Utiliser au minimum 8 caractères'}</Text>
            </View>
            <View style={styles.listitem}>
            <Text style={styles.paragraph}>{'\u2022'}</Text>
            <Text style={styles.paragraph}>{'Utiliser un mélange de chiffres et de lettres'}</Text>
            </View>
            <View style={styles.listitem}>
            <Text style={styles.paragraph}>{'\u2022'}</Text>
            <Text style={styles.paragraph}>{'Utiliser des caractères spéciaux'}</Text>
            </View>
          </View>
        </View>
        <View style={{gap: 12,display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              secureTextEntry={passwordVisibility}
              textContentType="newPassword"
              placeholder= "Mot de passe actuel"
            />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Image style={{ marginBottom:16,marginLeft: 17,marginTop: 19,marginRight:13}}  source={eyeimg}/>
          </TouchableOpacity>
          </View>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              secureTextEntry={passwordVisibility}
              textContentType="newPassword"
              placeholder= "Nouveau mot de passe"
            />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Image style={{ marginBottom:16,marginLeft: 17,marginTop: 19,marginRight:13}}  source={eyeimg}/>
          </TouchableOpacity>
          </View>
          <View style={styles.inputbox}>
        
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            style={styles.textbox}
            secureTextEntry={passwordVisibility}
            textContentType="newPassword"
            placeholder= "Confirmer le mot de passe"
            />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Image style={{ marginBottom:16,marginLeft: 17,marginTop: 19,marginRight:13}}  source={eyeimg}/>
          </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.bouton} onPress={handleSuccessPress}>
          <View>
          <Text style={styles.btntext}>Modifier mon mot de passe</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listitem:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap:10,
    textAlign:'left',
  },
  list:{
    marginBottom: 23 
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
    paddingLeft: 18,
    paddingRight: 25,
  },
  lockvector: {
    width:21,
    height:27,
    marginBottom:16,
    marginLeft: 17,
    marginTop: 19,
    marginRight:13,
  },
  btntext: {
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
    letterSpacing: 1
  },
  title:{
    fontSize:16,
    color:'#111111',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
    marginTop:28,
    marginBottom:12,
  },
  paragraph: {
    color: "#111111",
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 27,
    letterSpacing:1
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
    letterSpacing: 1
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
  }
});

export default ChangePasswordScreen;