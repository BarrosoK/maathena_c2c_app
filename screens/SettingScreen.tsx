import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import SettingRow from './component/SettingRow';
const logoutimg = require('../assets/img/sign-out.png')
const accountList = [
  {
    title:'Profil',
    image_url:require('../assets/img/profile.png'),
    screen:'profile'
  },
  {
    title:'Adresses enregistrées',
    image_url:require('../assets/img/location.png'),
    screen:'address'
  },
  {
    title:'Modifier le mot de passe',
    image_url:require('../assets/img/lock.png'),
    screen:'changepassword'
  },
  {
    title:'Notifications',
    image_url:require('../assets/img/notification.png'),
    screen:'notifications'
  },
];
const pageList = [
  {
    title:'A propos de Maathena',
    image_url:require('../assets/img/typcn_business-card.png'),
    screen:'proposal'
  },
  {
    title:'Politique de confidentialité',
    image_url:require('../assets/img/material-symbols_privacy-tip-outline.png'),
    screen:'privacypolicy'
  },
  {
    title:'Aide et support',
    image_url:require('../assets/img/question.png'),
    screen:'support'
  },
];

const SettingScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleLogoutPress = () => navigate('Login');
   const itemClickListener = (screenname) => {navigate(screenname)};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.firstrow}>
        <Text style={styles.header}>Compte</Text>
        <FlatList
                  data={accountList}
                  renderItem={({ item }) => 
                  <TouchableOpacity onPress={()=>itemClickListener(item.screen)}>
                  <SettingRow
                      title={item.title}
                      image_url={item.image_url}   
                  />
                  </TouchableOpacity>}
              />
        </View>
        <View style={styles.secondrow}>
        <Text style={styles.header}>A propos et conditions</Text>
        <FlatList
                  data={pageList}
                  renderItem={({ item }) => 
                  <TouchableOpacity onPress={()=>itemClickListener(item.screen)}>
                  <SettingRow
                      title={item.title}
                      image_url={item.image_url}
                      screenname = {item.screen}
                  />
                  </TouchableOpacity>
                }
              />
      </View>
      <TouchableOpacity style={styles.bouton} onPress={handleLogoutPress}>
          <View style={styles.group}>
          <Image style={styles.group2}  alt="Group" source={logoutimg} />
          <Text style={styles.text}>Se déconnecter</Text>
          </View>
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color:'#1B1B1B',
    textAlign: 'center',
    fontWeight: '400',
    fontSize:16,
    lineHeight: 28,
    fontFamily:'Work Sans',
  },
  bouton: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlign: 'center',
    paddingLeft:15
  },
  group2 : {
   height: 28,
   width: 28
  },
  group : {
    alignItems: "center",
    justifyContent: "center",
    gap:14,
    display: 'flex',
    flexDirection: 'row',
  }, 
  firstrow: {
    marginBottom:40
  },
  secondrow: {
    marginBottom:40
  }, 
  header:{
    color:'#084442',
    fontSize:21.3,
    fontFamily:'Work Sans',
    fontWeight:'600',
    lineHeight:57,
    marginBottom: 20
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
});

export default SettingScreen;