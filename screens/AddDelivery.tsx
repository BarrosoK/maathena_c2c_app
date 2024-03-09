import React,{useState} from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import RadioButton from './component/RadioButton';
import Radio from './component/Radio';
import SelectDropdown from 'react-native-select-dropdown'

import { launchImageLibrary } from 'react-native-image-picker';

const personicon = require('../assets/img/Group_133999.png');
const vectoricon = require('../assets/img/Vector.png');
const fluent_slideicon = require('../assets/img/fluent_slide.png');
const park_addicon = require('../assets/img/icon-park_add-picture.png');
const imageicon = require('../assets/img/clarity_picture-line.png');
const dropdownicon = require('../assets/img/dropdown.png');
const Radio_unselecticon = require("../assets/img/Radio_unselect.png");
const Radioicon = require("../assets/img/Radio.png");

const AddDelivery = (props:any) => {
  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };
  const names = ["Egypt", "Canada", "Australia", "Ireland"];
  const address = ["Egypt", "Canada", "Australia", "Ireland"];
  const options = [
    {value : 'oui'},
    {value : 'non'}
  ];
  const sizes = [
    {value : 'S',tooltip:'10x15x10cm'},
    {value : 'M',tooltip:'40x15x10cm'},
    {value : 'L',tooltip:'100x70x60cm'}
  ];
  const weight = [
    {value : '< 2kg'},
    {value : '2-10kg'},
    {value : '> 10kg'}
  ];

  let { navigate } = props.navigation;
  const [sourceOption, setsourceOption] = useState('own');
  const [sourcAddress, setsourceAddress] = useState('ownaddress');
  const [option, setOption] = useState(null);
  const [photo, setPhoto] = React.useState(null);
  const handleAddBtnPress = () => navigate('deliveryprice', { screen: 'adddelivery' });
  const selectHandler = (value) => {
    setsourceOption(value);
  };
  const selectaddressHandler = (value) => {
    setsourceAddress(value);
  };
  StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.div}>
        <View style={styles.accorodians}>
          <View style={styles.accorodian}>
            <View style={styles.accorodianlabel}>
              <Image source={personicon}></Image>
              <Text style={styles.atitle}>Expéditeur</Text>
              <Image style={styles.vectoricon} source={vectoricon}></Image>
            </View>
          </View> 
          <View style={styles.box}>
            <TouchableOpacity onPress={() => selectHandler('own')} style={styles.btn}>
              <Image style={styles.img} source={Radio_unselecticon} /> 
              <SelectDropdown
                data={names}
                defaultButtonText="Moi (Prénom Nom)"
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Image source={isOpened ? dropdownicon : dropdownicon}  />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              /> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => selectHandler('other')}>
                <Image style={styles.img} source={Radioicon}/>
                <Text style={styles.radiotext}>Ajouter nouveau</Text>
              </TouchableOpacity>
            <View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  textContentType="username"
                  placeholder= "Nom"
                />
              </View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Prénom"
                />
              </View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Téléphone"
                />
              </View>
              <View style={styles.addressselect}>
                <Text style={styles.addressheader}>Adresse : </Text>
              <TouchableOpacity onPress={() => selectaddressHandler('ownaddress')} style={styles.btn}>
                <Image style={styles.img} source={Radio_unselecticon} /> 
                <SelectDropdown
                data={address}
                defaultButtonText="Domicile"
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Image source={isOpened ? dropdownicon : dropdownicon}  />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              /> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => selectaddressHandler('otheradr')}>
                <Image style={styles.img} source={Radioicon}/>
                <Text style={styles.radiotext}>Nouvelle adresse</Text>
              </TouchableOpacity>
              <View style={styles.inputbox}>
                <TextInput
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Rue"
                />
              </View>
              <View style={styles.inlinebox}>
                <View style={styles.inline_inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    placeholderTextColor= '#08444280'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Code postal"
                    />
                </View>
                <View style={styles.inline_inputbox}>
                    <TextInput
                    autoCorrect={false}
                    placeholderTextColor= '#08444280'
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Ville"
                    />
                </View>
            </View>        
            </View> 
            </View>
          </View>
          <View style={styles.accorodian}>
            <View style={styles.accorodianlabel}>
              <Image source={personicon}></Image>
              <Text style={styles.atitle}>Destinataire</Text>
              <Image style={styles.vectoricon} source={vectoricon}></Image>
            </View>
          </View> 
          <View style={styles.box}>
            <TouchableOpacity onPress={() => selectHandler('own')} style={styles.btn}>
              <Image style={styles.img} source={Radio_unselecticon} /> 
              <SelectDropdown
                data={names}
                defaultButtonText="Moi (Prénom Nom)"
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Image source={isOpened ? dropdownicon : dropdownicon}  />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              /> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => selectHandler('other')}>
                <Image style={styles.img} source={Radioicon}/>
                <Text style={styles.radiotext}>Ajouter nouveau</Text>
              </TouchableOpacity>
            <View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  textContentType="username"
                  placeholder= "Nom"
                />
              </View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Prénom"
                />
              </View>
              <View style={styles.inputbox}>
                <TextInput
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Téléphone"
                />
              </View>
              <View style={styles.addressselect}>
                <Text style={styles.addressheader}>Adresse : </Text>
              <TouchableOpacity onPress={() => selectaddressHandler('ownaddress')} style={styles.btn}>
                <Image style={styles.img} source={Radio_unselecticon} /> 
                <SelectDropdown
                data={address}
                defaultButtonText="Domicile"
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Image source={isOpened ? dropdownicon : dropdownicon}  />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              /> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => selectaddressHandler('otheradr')}>
                <Image style={styles.img} source={Radioicon}/>
                <Text style={styles.radiotext}>Nouvelle adresse</Text>
              </TouchableOpacity>
              <View style={styles.inputbox}>
                <TextInput
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholderTextColor= '#08444280'
                  style={styles.textbox}
                  placeholder= "Rue"
                />
              </View>
              <View style={styles.inlinebox}>
                <View style={styles.inline_inputbox}>
                    <TextInput
                    autoCapitalize="none"
                    placeholderTextColor= '#08444280'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Code postal"
                    />
                </View>
                <View style={styles.inline_inputbox}>
                    <TextInput
                    autoCorrect={false}
                    placeholderTextColor= '#08444280'
                    returnKeyType="next"
                    style={styles.textbox}
                    placeholder= "Ville"
                    />
                </View>
            </View>        
            </View> 
            </View>
          </View>
          <View style={styles.accorodian}>
              <View style={styles.accorodianlabel}>
                <Image source={fluent_slideicon}></Image>
                <Text style={styles.atitle}>Format du colis</Text>
                <Image style={styles.vectoricon} source={vectoricon}></Image>
              </View>
          </View> 
          <View style={styles.box}>
            <View>
            <Text style={styles.label}>Taille :</Text>
            <RadioButton data={sizes} onSelect={(value) => setOption(value)} />
            </View>
            <View style={styles.optiongroup}>
            <Text style={styles.label}>Poids :</Text>
            <RadioButton data={weight} onSelect={(value) => setOption(value)} />
            </View>
            <View style={styles.radiogroup}>
              <Text style={styles.radiobuttontext}>Le colis est-il fragile ? </Text>
              <Radio data={options} onSelect={(value) => setOption(value)} />
            </View>
          </View>
          <View style={styles.accorodian}>
              <View style={styles.accorodianlabel}>
                <Image source={park_addicon}></Image>
                <Text style={styles.atitle}>Photo du colis</Text>
                <Image style={styles.vectoricon} source={vectoricon}></Image>
              </View>
          </View> 
          <View style={styles.box}>
            <TouchableOpacity onPress={handleChoosePhoto}>
              <View style={styles.choosephoto}>
                <Image source={imageicon}></Image>
                <View style={styles.inlinetext}>
                  <Text style={styles.plusicon}>+</Text>
                  <Text style={styles.uploadtext}>Prendre une photo</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.textAreaContainer}>
              <TextInput
              autoCorrect={false}
              placeholderTextColor= '#1B1B1B'
              returnKeyType="next"
              multiline = {true}
              numberOfLines = {10}
              style={styles.textArea}
              placeholder= "Message (facultatif)"
              />
          </View>
      </View>
      <TouchableOpacity style={styles.bouton} onPress={handleAddBtnPress}>
          <View style={styles.group}>
          <Text style={styles.btntext}>Calculer le prix</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optiongroup:{
    marginTop:24
  },
  addressselect:{
    marginTop: 27,
  },
  addressheader:{
    fontSize: 16,
    color: '#1B1B1B',
    fontWeight:'400',
    fontFamily:'Work Sans',
    lineHeight: 28.6,
    paddingBottom: 13
  },
  radiotext:{
    fontSize: 16,
    color: '#1B1B1B',
    fontWeight:'400',
    fontFamily:'Work Sans',
    lineHeight: 28.6,
  },
  btn:{
    display:'flex',
    flexDirection:'row',
    gap:13,
    marginBottom:23,
    alignItems:'center'
  },
  img:{
    height: 14,
    width: 14
  },
  selectrow:{
    marginBottom:23,
    display:'flex',
    flexDirection:'row',
    gap:13
  },
  dropdown1BtnStyle: {
    width: '90%',
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#084442',
  },
  dropdown1BtnTxtStyle: {
    color: '#08444280', 
    textAlign: 'left', 
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 28.6
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  textAreaContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingLeft: 25,
    paddingTop:24,
    borderRadius:8,
    width: '100%',
    backgroundColor:'#fff'
  },
  textArea: {
    height: 147,
    width:'100%',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 20,
    color:'#1B1B1B',
  },
  radiogroup:{
    display:'flex',
    flexDirection:'row',
    marginTop: 34,
    gap:12
  },
  choosephoto:{
    backgroundColor:'#EAEAEA',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    paddingLeft:60,
    paddingTop:48,
    paddingRight:60,
    paddingBottom:48
  },
  radiobuttontext:{
    color:'#000000',
    fontWeight:'400',
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
    fontSize:16,
    letterSpacing:1
  },
  uploadtext:{
    color:'#084442',
    fontWeight:'400',
    fontFamily: 'Work Sans',
    lineHeight: 28.6,
    fontSize:14.5,
  },
  inlinetext:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  plusicon:{
    color:'#084442',
    fontWeight:'300',
    fontFamily: 'Work Sans',
    lineHeight: 57.6,
    fontSize:32,
  },
  uploadbtn:{
    fontSize:16,
    color:'#084442',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
    marginTop:8
  },
  label: {
    color: "#084442",
    fontWeight: '500',
    fontSize: 21.3,
    fontFamily: 'Work Sans',
    lineHeight: 41.1,
  },
  vectoricon:{
  },
  accorodians:{
    display:'flex',
  },
  inlinebox:{
    display:'flex',
    flexDirection:'row',
    gap: 12
  },
  inline_inputbox: {
    borderColor: "#084442",
    borderWidth: 1,
    width: '100%',
    borderRadius:8,
    height:56,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignContent:'center',
    marginBottom:12
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
  box:{
    backgroundColor:'#fff',
    paddingLeft: 23,
    paddingTop:25,
    paddingBottom:31,
    paddingRight:23,
    borderRadius:8,
    marginBottom:15
  },
  atitle:{
    color:'#084442',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Work Sans',
    lineHeight: 57.6,
    flex:1
  },
  accorodian:{
    backgroundColor:'#B9E6C9',
    paddingLeft:20,
    paddingTop: 9.35,
    paddingBottom: 8.3,
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
  },
  accorodianlabel:{
    display:'flex',
    flexDirection:'row',
    gap:22,
    alignItems:'center',
    paddingRight:35
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
    marginTop:30,
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

export default AddDelivery;