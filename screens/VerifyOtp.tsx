import React,{useState} from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
const VerifyOtpScreen = (navprops:any) => {
  let { navigate } = navprops.navigation;
  const handleVerifyOtpPress = () => navigate('OtpSuccessMsg');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.div}>
          
          <View>
          <Text style={styles.titletext}>Code de vérification</Text>
          <Text style={styles.paragraph}>Entrez le code de vérification que vous avez reçu par sms.</Text>
          
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor/> : null)}
                </Text>
              )}
            />  
          <TouchableOpacity style={styles.bouton} onPress={handleVerifyOtpPress}>
          <View>
          <Text style={styles.btntext}>Vérifier</Text>
          </View>
          </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    minHeight:60,
    paddingBottom:17,
    paddingTop:17,
    fontSize: 22,
    lineHeight:26.4,
    fontWeight:'700',
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius:8,
    textAlign: 'center',
  },
  titletext: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: 21.3,
    lineHeight:41.1,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    paddingTop:129,
    paddingLeft:25,
    paddingRight:25,
  },
  btntext :{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Work Sans',
    lineHeight: 20,
  },
  paragraph: {
    color: "#8391A1",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    marginTop:30,
    marginBottom:30
  },
  bouton:{
    backgroundColor: '#084442',
    borderRadius: 6,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:30,
  },
  
});

export default VerifyOtpScreen;