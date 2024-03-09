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

const ForgotScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSuccessPress = () => navigate('Forgotsuccess');
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
              keyboardType="email-address"
              placeholder= "E-mail"
            />
          </View>
        </View>
        <View>
          <Text style={styles.paragraph}>Entrez l’adresse e-mail de votre compte. Vous recevrez un e-mail pour redéfinir votre mot de passe.</Text>
          <TouchableOpacity style={styles.bouton} onPress={handleSuccessPress}>
          <View>
          <Text style={styles.btntext}>Réinitialiser mon mot de passe</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  btntext: {
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

export default ForgotScreen;