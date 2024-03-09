import React,{useState} from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  StyleSheet
} from 'react-native';
const bxs_packageicon = require('../assets/img/bxs_package.png');
const DeliveryDateTime = (props:any) => {
  let { navigate } = props.navigation;
  const [couponVisibility, setcouponVisibility] = useState(false); 
  const handleAddBtnPress = () => navigate('SuccessAddDelivery', { screen: 'AddDeliveryScreen' });
  const handlecoupon = () =>{setcouponVisibility(!couponVisibility)};
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.accorodian}>
          <View style={styles.accorodianlabel}>
            <Image source={bxs_packageicon}></Image>
            <Text style={styles.atitle}>Récupération du colis</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.datetext}>Date à laquelle le livreur viendra chercher le colis auprès de vous.</Text>
          <View style={styles.timebox}>
            <Text style={styles.boxheader}>Date de la récupération du colis</Text>
          </View>
          <View style={styles.timebox}>
            <Text style={styles.boxheader}>Heure de la récupération du colis</Text>
          </View>
        </View>
        
      <TouchableOpacity style={styles.bouton} onPress={handleAddBtnPress}>
        <View style={styles.group}>
          <Text style={styles.btntext}>Suivant</Text>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timebox:{
    borderColor:'#084442',
    borderWidth:0.72,
    borderRadius:8,
    paddingLeft:16,
    paddingRight:19,
    paddingTop:22,
    paddingBottom:23.25,
    marginTop:14
  },
  boxheader:{
    color:'#3E3E3E',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
  },
  box:{
    backgroundColor:'#fff',
    paddingLeft: 17,
    paddingTop:23.3,
    paddingBottom:25,
    paddingRight:17,
    borderRadius:8
  },
  atitle:{
    color:'#084442',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Work Sans',
    lineHeight: 57.6,
  },
  accorodian:{
    backgroundColor:'#B9E6C9',
    paddingLeft:23,
    paddingTop: 9.35,
    paddingBottom: 8.3,
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
  },
  accorodianlabel:{
    display:'flex',
    flexDirection:'row',
    gap:20,
    alignItems:'center'
  },
  datetext:{
    textAlign:'center',
    color:'#484848',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 25,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  btntext :{
      fontSize:16,
      color:'#fff',
      fontWeight:'500',
      fontFamily: 'Work Sans',
      lineHeight: 20
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width:'100%',
    marginTop:33,
  },
  group : {
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  div: {
    width: '100%',
    padding: 22,
  },
  });

export default DeliveryDateTime;