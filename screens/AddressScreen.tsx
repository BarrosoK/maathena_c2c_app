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
import AddressRow from './component/AddressRow';
const detail_icon = require('../assets/img/back_arrow.png');
const add_address_icon = require('../assets/img/address_plus.png');

const addressList = [
  {
  title:'Domicile',
  image_url:require('../assets/img/home_address.png'),
  address:'3 rue de Blabla',
  codepostal:'75001',
  ville:'Paris'

  },
  {
    title:'Bureau',
    image_url:require('../assets/img/address-book.png'),
    address:'3 rue de Blabla',
    codepostal:'75001',
    ville:'Paris'
  },
  {
    title:'Ami 1',
    image_url:require('../assets/img/address-book.png'),
    address:'3 rue de Blabla',
    codepostal:'75001',
    ville:'Paris'
  },
  
];

const AddressScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleAddPress = () => navigate('addaddress');
   const handleEditPress = () => navigate('editaddress');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.firstrow}>
        <FlatList
                  data={addressList}
                  renderItem={({ item }) => 
                  <AddressRow
                      onPress={ handleEditPress }
                      id={item.id}
                      title={item.title}
                      image_url={item.image_url}
                      address={item.address} 
                      codepostal= {item.codepostal}
                      ville= {item.ville}
                  />}
              />
        </View>
        <TouchableOpacity style={styles.addaddressbtn}  onPress={handleAddPress}>
            <View style={styles.addaddress}>
            <Image source={add_address_icon} />
            <Text style={styles.btntext}>Ajouter une adresse</Text>
            </View>
            <Image source={detail_icon} />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addaddress:{
    display:'flex',
    flexDirection:'row',
    gap:4,
    alignItems:'center'
  },
  addaddressbtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
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
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 21,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
});

export default AddressScreen;