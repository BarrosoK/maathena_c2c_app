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
  Image
} from 'react-native';
import Modal from "react-native-modal";
const delete_success = require('../assets/img/delete_success.png');
const DeleteAccountScreen = (props:any) => {
   let { navigate } = props.navigation;
   
   const [isModalVisible, setIsModalVisible] = useState(false);
   const handleModal = (logout) => {
    setIsModalVisible(() => !isModalVisible);
    if(logout){
      navigate('Login');
    }
  };
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <View style={{gap: 12,display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <Text style={styles.paragraph}>Nous sommes désolés de vous voir partir. A fin de nous améliorer, pouvez-vous nous indiquer la raison pour laquelle vous souhaitez partir?</Text>
          <View style={styles.inputbox}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textbox}
            />
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.bouton} onPress={()=>handleModal(false)}>
          <View>
          <Text style={styles.btntext}>Supprimer mon compte</Text>
          </View>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
          <View style={styles.modalcontainer}>
          <TouchableOpacity  onPress={()=>handleModal(true)}>
          <View style={styles.modalcontent}>
            <Image source={delete_success}></Image>
            <Text style={styles.modaltext}>Votre compte a bien été supprimé.</Text>
          </View>
          </TouchableOpacity>
          </View>
        </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modaltext:{
    marginTop:27,
    fontSize:16,
    color:'#000',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  modalcontent:{
    textAlign:'center',
    alignItems:'center'
  },
  modalcontainer:{
    backgroundColor: "#E1E1E1",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E8ECF41A",
    borderStyle: "solid",
    paddingLeft:16,
    paddingRight:14,
    paddingVertical:46,
    textAlign:'center',
  },
  bottomcontainer:{
    marginTop: 65
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
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
    marginTop:38,
    marginBottom: 86
  },
  inputbox: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    width: '100%',
    borderRadius:8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    color:'#1B1B1B',
    textAlign: 'left',
    flex: 1,
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

export default DeleteAccountScreen;