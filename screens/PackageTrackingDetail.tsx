import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DeliveryRow from './component/DeliveryRow';
const parcelimg = require('../assets/img/octicon_package.png');
import Loader from './component/Loader';
const completed = require('../assets/img/completed.png');
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
const PackageTrackingDetail = (props:any) => {
   let { navigate } = props.navigation;
   let state={
    isLoading:false
   }
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.div}>
      <Text style={styles.header}>Colis n°2479630</Text>
      { /* <Loader isLoading={state.isLoading} /> */ }
      <View style={styles.deliverycompleted}>
        <Image source={completed}></Image>
        <Text style={styles.deliverytitle}>Livraison effectuée</Text>
      </View>
      <View style={styles.packagedetail}>
      <Image source={parcelimg}></Image>
      <View style={styles.packagecontent}>
      <View style={styles.detail}>
        <Text style={styles.label}>Taille : </Text>
        <Text style={styles.value}>S</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.label}>Poids : </Text>
        <Text style={styles.value}> {'<'} 2kg</Text>
      </View>
      
      <View style={styles.address}>
        <Text style={styles.addresslabel}>Adresse de retrait : </Text>
        <View style={styles.addressgroup}>
              <Text style={styles.description}>Domicile</Text>
              <Text style={styles.description}>3 rue de Blabla</Text>
              
              <View style={styles.addressgroup2}>
                  <Text style={styles.description}>75000</Text>
                  <Text style={styles.description}>Paris</Text>
              </View>
        </View>
      </View>
      <View style={styles.address}>
        <Text style={styles.addresslabel}>Adresse de livraison : </Text>
        <View style={styles.addressgroup}>
              <Text style={styles.description}>Ami 1 </Text>
              <Text style={styles.description}>3 rue de Blabla</Text>
              
              <View style={styles.addressgroup2}>
                  <Text style={styles.description}>75000</Text>
                  <Text style={styles.description}>Paris</Text>
              </View>
        </View>
      </View>
      <Text style={styles.packageprice}>Montant payé : 5€ TTC</Text>
      </View>
      </View>
      <View style={styles.history}>
        <Text style={styles.historytitle}>Historique de la livraison :</Text>
        
        <View style={styles.row}>
          <Text style={styles.listtitletext}>Aujourdhui</Text>
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
          <Text style={styles.listtitletext}>Hier</Text>
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
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addressgroup:{
    display:'flex'
  },
  addressgroup2:{
    display:'flex',
    flexDirection:'row',
    gap:5
  },
  description: {
    color: '#878787',
    fontFamily: 'Work Sans',
    fontSize: 12,
    lineHeight:18,
    fontWeight: '400',
},
  packagecontent:{
    display:'flex',
    flexDirection:'column'
  },
  deliverycompleted: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#B9E6C999',
    borderRadius: 10,
    paddingVertical: 19,
    paddingLeft:16,
    gap: 26,
    width:'100%'
  },
  deliverytitle: {
    color: '#084442',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:20,
    fontWeight: '500',
  },
  packagedetail: {
    display:'flex',
    flexDirection:'row',
    gap:15,
    marginTop:25,
    marginLeft:4
  },
  detail: {
    display:'flex',
    flexDirection:'row'
  },
  label: {
    color: '#1B1B1B',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:28.6,
    fontWeight: '400',
  },
  value: {
    color: '#1B1B1B',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:28.6,
    fontWeight: '400',
  },
  address: {
    marginTop: 9,
    marginBottom: 9
  },
  addresslabel: {
    color: '#1B1B1B',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:28.6,
    fontWeight: '400',
  },
  
  packageprice : {
    color: '#1B1B1B',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:28.6,
    fontWeight: '400',
  },
  history:{
    marginTop: 45,
  },
  historytitle : {
    color: '#1B1B1B',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:20,
    fontWeight: '500',
    marginBottom:18
  },
  header: {
    color: '#084442',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:57.6,
    fontWeight: '600',
    marginTop:12,
    marginBottom:18
  },
  listtitletext :{
    color: '#878787',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    fontSize: 14.5,
    lineHeight:17,
    fontWeight: '400',
    marginBottom:12,
    paddingLeft: 1
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
    paddingLeft: 25,
    paddingRight: 24,
    paddingTop: 12
  },
});

export default PackageTrackingDetail;