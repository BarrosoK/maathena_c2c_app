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
import ProfileRow from './component/ProfileRow';
const detail_icon = require('../assets/img/back_arrow.png');
const trash_icon = require('../assets/img/profile_delete.png');
const profileData = [
  {
    label:'Nom',
    image_url:require('../assets/img/profile_person.png'),
    value:'Lucie Martin',
    editable:true,
    screen:'modifyname',
  },
  {
    label:'E-mail',
    image_url:require('../assets/img/profile_email.png'),
    value:'lucie.m@gmail.com',
    editable:true,
    screen:'modifyemail',
  },
  {
    label:'Téléphone',
    image_url:require('../assets/img/profile_phone.png'),
    value:'06 00 00 00 00',
    editable:true,
    screen:'modifyphone',
  },
  {
    label:'Genre',
    image_url:require('../assets/img/profile_gender.png'),
    value:'Femme',
    editable:true,
    screen:'modifygender',
  },
  {
    label:'Date de naissance',
    image_url:require('../assets/img/profile_birthday.png'),
    value:'15/01/1987',
    editable:false,
    screen:'',
  },
  {
    label:'',
    image_url:require('../assets/img/profile_img.png'),
    value:'Avatar',
    editable:true,
    screen:'modifyphoto',
  },
];

const ProfileScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handledeletePress = () => navigate('deleteaccount');
   const itemClickListener = (screenname) => {navigate(screenname)};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
      <View style={styles.firstrow}>
        <FlatList
                  data={profileData}
                  renderItem={({ item }) =>
                  <ProfileRow
                      label={item.label}
                      image_url={item.image_url}
                      value={item.value}
                      editable={item.editable}
                      onPress={()=>itemClickListener(item.screen)}
                  />
                }
              />
        </View>
        <TouchableOpacity style={styles.addaddressbtn}  onPress={handledeletePress}>
            <View style={styles.addaddress}>
            <Image style={styles.trash} source={trash_icon} />
            <Text style={styles.btntext}>Supprimer mon compte</Text>
            </View>
            <Image source={detail_icon} />
        </TouchableOpacity>
      </View>          
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  trash:{
    height:20,
    width:20
  },
  addaddressbtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  addaddress:{
    display:'flex',
    flexDirection:'row',
    gap:14,
    alignItems:'center'
  },
  btntext:{
    color:'#1B1B1B',
    textAlign: 'left',
    fontWeight: '500',
    fontSize:16,
    lineHeight: 20,
    fontFamily:'Work Sans',
    letterSpacing:1,
  },
  firstrow: {
    marginBottom:36
  },
  div: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingLeft: 23,
    paddingRight: 21,
    paddingTop: 25
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    width: '100%',
  },
});

export default ProfileScreen;