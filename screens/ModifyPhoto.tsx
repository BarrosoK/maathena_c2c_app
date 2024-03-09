import React,{useState,useEffect} from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Image
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const SERVER_URL = 'http://localhost:3000';
const profileimg = require('../assets/img/edit_profile.png');

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};
const ModifyPhotoScreen = (props:any) => {
   let { navigate } = props.navigation;
   const [photo, setPhoto] = React.useState(null);
   
   const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
   const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };
   const handlebtnclick = () => navigate('profile');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <Text style={styles.label}>Avatar</Text>
        <Image source={profileimg} style={styles.pimage}></Image>
        {photo && (
        <>
        <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
        )}
        <TouchableOpacity onPress={handleChoosePhoto}>
          <Text style={styles.uploadbtn}>Changer la photo</Text>
        </TouchableOpacity>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.bouton} onPress={handlebtnclick}>
          <View>
          <Text style={styles.btntext}>Modifier mon avatar</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  uploadbtn:{
    fontSize:16,
    color:'#084442',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
    marginTop:8
  },
  pimage:{
    width: 135,
    height: 135
  },
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

export default ModifyPhotoScreen;