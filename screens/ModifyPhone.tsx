import React,{useState,useEffect} from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const ModifyPhoneScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handlebtnclick = () => navigate('profile');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <Text style={styles.label}>Modifier le téléphone</Text>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
              value="06 00 00 00 00"
            />
          </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.bouton} onPress={handlebtnclick}>
          <View>
          <Text style={styles.btntext}>Modifier le numéro</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomcontainer:{
    marginTop: 43
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
    paddingTop:42
  },
  btntext: {
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  label: {
    color: "#084442",
    fontWeight: '500',
    fontSize: 21.3,
    fontFamily: 'Work Sans',
    lineHeight: 41.1,
  },
  inputbox: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:3
  },
  textbox: {
    color:'#878787',
    textAlign: 'left',
    flex: 1,
    marginBottom:10,
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
  }
});

export default ModifyPhoneScreen;