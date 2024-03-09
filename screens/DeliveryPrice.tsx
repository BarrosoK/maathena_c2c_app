import React,{useState} from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Image
} from 'react-native';
const priceicon = require('../assets/img/price-tags.png');
const DeliveryPrice = (props:any) => {
  let { navigate } = props.navigation;
  const [couponVisibility, setcouponVisibility] = useState(false); 
  const handleAddBtnPress = () => navigate('deliverydatetime', { screen: 'AddDeliveryScreen' });
  const handlecoupon = () =>{setcouponVisibility(!couponVisibility)};
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.accorodian}>
          <View style={styles.accorodianlabel}>
            <Image source={priceicon}></Image>
            <Text style={styles.atitle}>Prix</Text>
          </View>
          </View>
        <View style={styles.box}>
        {
        !couponVisibility ?(<View>
          <View style={styles.pricequotes}>
            <Text style={styles.pricelabel}>Coût de la livraison :</Text>
            <Text style={styles.pricelabel}>5 € TTC</Text>
          </View>
        <Text style={styles.coupentext}>Vous avez un bon de réduction ? Entrez le code ici :</Text>
        </View>):''
        }
        <View>
        <View style={styles.inputbox}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            placeholderTextColor= '#08444280'
            style={styles.textbox}
            textContentType="username"
            placeholder= "Code promo"
          />         
          <TouchableOpacity style={styles.whiteboxbtn} onPress={handlecoupon}>
            <Text style={styles.whiteboxbtntext}>Appliquer</Text>
          </TouchableOpacity>
        </View>
        </View>
        {
        couponVisibility ? (<View><Text style={styles.codesuccess}>Code promo appliqué.</Text>
        <Text style={styles.coupenprice}>Coût de la livraison :</Text>
        <View style={styles.pricetable}>
          <Text style={styles.pricelabel}>Sous-total :</Text>
          <Text style={styles.pricelabel}>5€ TTC</Text>
        </View>
        <View style={styles.pricetable}>
          <Text style={styles.pricelabel}>Code promo :</Text>
          <Text style={styles.pricelabel}>-2€ TTC</Text>
        </View>
        <View style={styles.totalpricetable}>
          <Text style={[styles.pricelabel,styles.totalprice]}>Total TTC :</Text>
          <Text style={[styles.pricelabel,styles.totalprice]}>3€ TTC</Text>
        </View></View>):''
        }
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
  pricelabel:{
    color:'#484848',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 20,
    letterSpacing:1
  },
  totalprice:{
    fontWeight: '500',
    lineHeight: 28.6,
  },
  pricequotes:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:14
  },
  box:{
    backgroundColor:'#fff',
    paddingLeft: 22,
    paddingTop:23.3,
    paddingBottom:25,
    paddingRight:23,
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
  coupenprice: {
    marginBottom:5.4,
    fontSize:16,
    color:'#484848',
    fontWeight:'400',
    fontFamily: 'Work Sans',
    lineHeight: 28.6
  },
  codesuccess:{
    marginBottom:25,
    marginTop:11,
    fontSize:16,
    color:'#484848',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20
  },
  coupentext:{
    marginBottom:20,
    marginRight:40,
    marginTop:17,
    fontSize:16,
    color:'#484848',
    fontWeight:'400',
    fontFamily: 'Work Sans',
    lineHeight: 25
  },
  whiteboxbtn:{
    backgroundColor: '#FFC309',
    borderRadius: 6,
    height: 38,
    marginRight:12,
    width:90,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  whiteboxbtntext:{
    color:'#084442',
    fontWeight:'500',
    fontSize:14.5,
    lineHeight:28.6,
    paddingTop: 4,
    paddingBottom:5,
    paddingLeft:11,
    paddingRight:10,
    fontFamily: 'Work Sans',
  },
  textbox: {
    color:'#08444280',
    textAlign: 'left',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 12,
    marginLeft:15.78,
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    textTransform:'uppercase'
  },
  inputbox: {
    borderColor: "#084442",
    borderWidth: 1,
    width: '100%',
    borderRadius:8,
    height:56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent:'center'
  },
  totalpricetable:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-between',
    paddingBottom: 14
  },
  pricetable:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-between',
    paddingBottom:5.4
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
    marginTop:39,
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

export default DeliveryPrice;