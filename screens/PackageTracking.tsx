import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DeliveryRow from './component/DeliveryRow';
import Loader from './component/Loader';

const parcelimg = require('../assets/img/carbon_delivery-parcel.png');
const itemList = [
  {
    title:'Le colis a été livré',
    description: 'Votre colis a été remis au destinataire.',
    subtitle:'17h00',
    image_url:require('../assets/img/octicon_package.png')
  },
  {
    title:'Le colis est en cours de livraison',
    description: 'Le livreur arrivera chez le destinataire à l’heure prévue.',
    subtitle:'16h35',
    image_url:require('../assets/img/octicon_package.png')
  },
  {
    title:'Le livreur est en route',
    description: 'Le livreur arrivera à l’adresse de récupération du colis à l’heure prévue.',
    subtitle:'16h35',
    image_url:require('../assets/img/octicon_package.png')
  },
];
const item2List = [
  {
    title:'Le colis est prêt à être récupéré',
    description: 'Votre commande est enregistrée. Le livreur viendra récupérer votre colis à la date et l’heure prévue.',
    subtitle:'14h00',
    image_url:require('../assets/img/octicon_package.png')
  },
];
const PackageTracking = (props:any) => {
   let { navigate } = props.navigation;
   const handleSignupPress = () => navigate('Login');
   let state={
    isLoading:false
   }
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.div}>
      { /* <Loader isLoading={state.isLoading} /> */ }
        <Text style={styles.header}>Colis n°2479630</Text>
        <View style={styles.row}>
          <Text style={styles.listTitleText}>Aujourdhui</Text>
          <FlatList
                data={itemList}
                renderItem={({ item }) => <DeliveryRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    subtitle={item.subtitle}
                />}
            />
        </View>
        <View style={[styles.row,styles.border]}>
          <Text style={styles.listTitleText}>Hier</Text>
          <FlatList
                data={item2List}
                renderItem={({ item }) => <DeliveryRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    subtitle={item.subtitle}
                />}
            />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#084442',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:57.6,
    fontWeight: '600',
    marginTop:12,
    marginBottom:18
  },
  listTitleText :{
    color: '#878787',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    fontSize: 14.5,
    lineHeight:17,
    fontWeight: '400',
    marginBottom:12,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  border:{
    borderColor:'#D4D4D4',
    borderTopWidth:1,
    paddingBottom:29,
    paddingTop:18,
  },
  row: {
    marginBottom: 18
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 24,
    paddingTop:12
  },
});

export default PackageTracking;