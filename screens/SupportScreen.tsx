import React from "react";
import {
  StatusBar,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import Supportrow from './component/SupportRow';
const profileData = [
  {label:'Suivi des livraisons'},
  {label:'Paiements'},
  {label:'Codes promo / réductions'},
  {label:'Mon compte'},
  {label:'Autre'}
];

const ProfileScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleContactBtnPress = () => navigate('contact');
   const itemClickListener = (screenname) => {navigate('faq')};
  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <View style={styles.firstrow}>
        <FlatList
                  data={profileData}
                  renderItem={({ item }) =>
                  <Supportrow
                      label={item.label}
                      onPress={()=>itemClickListener(item.label)}
                  />
                }
              />
        </View>
        <Text style={styles.header}>Nous n’avons pas répondu à votre question ?</Text>
        <TouchableOpacity style={styles.bouton} onPress={handleContactBtnPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Contactez-nous</Text>
          </View>
        </TouchableOpacity>
      </View>          
    </View>
  );
};

const styles = StyleSheet.create({
  firstrow: {
    marginBottom:39
  },
  div: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 23,
    paddingRight: 21,
    paddingTop: 25
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  header:{
    fontSize:14,
    color:'#1B1B1B',
    fontWeight:'400',
    fontFamily: 'Work Sans',
    lineHeight: 24
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
    letterSpacing:1
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width:'100%',
    marginTop:20,
  },
  group : {
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});

export default ProfileScreen;