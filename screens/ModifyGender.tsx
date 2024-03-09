import React,{useState} from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import RadioButton from './component/RadioButton';
const ModifyGenderScreen = (props:any) => {
   let { navigate } = props.navigation;
   const genders = [
    {value : 'F'},
    {value : 'M'},
    {value : 'Autre'}
  ];
   const handlebtnclick = () => navigate('profile');
   const [option, setOption] = useState(null);
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <Text style={styles.label}>Genre</Text>
        <RadioButton data={genders} onSelect={(value) => setOption(value)} />
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.bouton} onPress={handlebtnclick}>
          <View>
          <Text style={styles.btntext}>Modifier le genre</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomcontainer:{
    marginTop: 48
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 22,
    paddingTop:42
  },
  btntext: {
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  label: {
    color: "#084442",
    fontWeight: '500',
    fontSize: 21.3,
    fontFamily: 'Work Sans',
    lineHeight: 41.1,
  },
  inputbox: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:3
  },
  textbox: {
    color:'#878787',
    textAlign: 'left',
    flex: 1,
    marginBottom:10,
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Work Sans',
    lineHeight: 21,
  },
  bouton: {
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});

export default ModifyGenderScreen;