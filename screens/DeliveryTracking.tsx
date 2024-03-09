import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DashboardDeliveryRow from './component/DashboardDeliveryRow';
const parcelimg = require('../assets/img/carbon_delivery-parcel.png');
const itemList = [
  {
  title:'Colis n°2479630',
	description: 'Lundi 5 octobre à 10h00',
  subtitle:'Ami 1',
  image_url:require('../assets/img/octicon_package.png')
  },
  {
    title:'Colis n°2479630',
    description: 'Lundi 5 octobre à 10h00',
    subtitle:'Ami 1',
    image_url:require('../assets/img/octicon_package.png')
  },
  {
    title:'Colis n°2479630',
    description: 'Lundi 5 octobre à 10h00',
    subtitle:'Ami 1',
    image_url:require('../assets/img/octicon_package.png')
  },
];
const DeliveryTracking = (props:any) => {
   let { navigate } = props.navigation;
   const handlebtnPress = () => navigate('packagetracking');
   const handlebtndetailPress = () => navigate('packagetrackingdetail');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.greybox}>
          <View style={styles.greyboxFirstRow}>
            <Image  alt="carbon_delivery-parcel" source={parcelimg} style={styles.parcelimg} />
            <Text style={styles.greyboxText}>Livraisons en cours</Text>
          </View>
          <View style={styles.whitebox}>
            <Text style={styles.whiteboxText}>Colis n°2479630</Text>
            <View style={styles.detailText}>
              <View>
                <Text style={styles.whiteboxTitle}>Destinataire :  </Text>
                <Text style={styles.whiteboxTitleData}>Ami 1</Text>
              </View>
              <View>
                <Text style={styles.whiteboxTitle}>Livraison prévue le :  </Text>
                <Text style={styles.whiteboxTitleData}>Lundi 5 octobre à 10h00</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.whiteboxbtn} onPress={handlebtnPress}>
              <Text style={styles.whiteboxbtntext}>Suivre</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whitebox1}>
            <Text style={styles.whiteboxText}>Colis n°2479630</Text>
            <View style={styles.detailText}>
              <View>
                <Text style={styles.whiteboxTitle}>Destinataire :  </Text>
                <Text style={styles.whiteboxTitleData}>Ami 1</Text>
              </View>
              <View>
                <Text style={styles.whiteboxTitle}>Livraison prévue le :  </Text>
                <Text style={styles.whiteboxTitleData}>Lundi 5 octobre à 10h00</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.whiteboxbtn} onPress={handlebtnPress}>
              <Text style={styles.whiteboxbtntext}>Suivre</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.listTitleText}>Dernières livraisons :</Text>
          <FlatList
                data={itemList}
                renderItem={({ item }) => 
                <DashboardDeliveryRow
                    onPress={ handlebtndetailPress }
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    subtitle={item.subtitle}
                />}
            />
        </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
whiteboxTitleData : {
  fontSize:12,
  color:'#1B1B1B',
  fontWeight:'500',
  lineHeight:28.6,
},
whiteboxTitle : {
  fontSize:12,
  color:'#1B1B1B',
  fontWeight:'400',
  lineHeight:28.6,
},
toprightsection : {
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection:'row',
  gap: 8,
},
whiteboxText :{
  fontSize:12,
  color:'#1B1B1B',
  fontWeight:'500',
  lineHeight:28.6,
  justifyContent:'flex-start',
},
greyboxText:{
  fontSize:16,
  color:'#084442',
  fontWeight:'500',
  lineHeight:20,
},
whitebox:{
  backgroundColor:'#FFFFFF',
  paddingLeft:19,
  paddingTop: 11,
  paddingRight:19,
  paddingBottom:20,
  marginTop:22,
  justifyContent:'center',
  borderRadius:10,
  width:'100%'
},
whitebox1:{
  backgroundColor:'#FFFFFF',
  paddingLeft:19,
  paddingTop: 11,
  paddingRight:19,
  paddingBottom:19,
  marginTop:13,
  justifyContent:'center',
  borderRadius:10,
  width:'100%'
},
detailText:{
  flexDirection:'row',
  justifyContent:'space-between',
  display:'flex',
  alignItems:'flex-start',
},
whiteboxbtntext:{
  color:'#084442',
  fontWeight:'500',
  fontSize:14.5,
  lineHeight:28.6,
},
greybox : {
  backgroundColor:'#B9E6C999',
  paddingLeft:21,
  paddingRight:21,
  paddingBottom:19,
  paddingTop:25,
  justifyContent:'flex-start',
  display:'flex',
  alignItems:'flex-start',
  borderRadius:10,
},
arrow : {
  width:24,
},
btnicon:{
  height:29,
  width:29,
},
btnsgroup: {
  alignItems: "center",
  justifyContent: 'space-between',
  gap:50,
  display: 'flex',
  flexDirection: 'row',
},
greyboxFirstRow:{
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  columnGap:13,
  alignItems:'center'
},
profile :{
    height:39,
    width:39,
    borderRadius:10,
},
logo : {
    height:41,
    width:127,
 },
 parcelimg:{
  height:39,
  width:39
 },
 usernametext : {
    color: '#000000',
    fontFamily: 'Work Sans',
    fontSize: 14.5,
    lineHeight:28.6,
    fontWeight: '400',
    letterSpacing: 1
 },
  title: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:41.1,
    fontWeight: '500',
    marginTop:25
  },
  listTitleText :{
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    fontSize: 16,
    lineHeight:20,
    fontWeight: '500',
    marginTop:31,
    marginBottom: 13,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  firstrow: {
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'flex-start'
  },
  secondrow: {
    display:'flex',
    alignItems: 'flex-start',
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20
  },
  paragraph: {
    color: "#000000",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop:5,
    textAlign:'center',
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
  whiteboxbtn:{
    backgroundColor: '#FFC309',
    borderRadius: 6,
    height: 38,
    width:81,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  group : {
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 26,
  },
});

export default DeliveryTracking;