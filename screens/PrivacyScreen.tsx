import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const PrivacyScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleSuccessPress = () => navigate('Forgotsuccess');
   StatusBar.setHidden(true);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.div}> 
        <View style={styles.privacy}>
          <Text style={styles.title}>Titre</Text>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. 
          Nunc rutrum leo sit amet eros pellentesque, 
          utinom auctor dui suscipit. 
          Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum. Cras eget maximus tortor, quis tincidunt eros. Integer sit amet rutrum mauris.</Text>
        </View>
        <View style={styles.privacy}>
          <Text style={styles.title}>Titre</Text>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas id viverra ligula. Nunc rutrum leo sit amet.
            Auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.
            Eget maximus tortor, quis tincidunt eros. Nunc rutrum leo sit amet eros pellentesque, uteo auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum. </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 19
  },
  privacy:{
    marginBottom: 30
  },
  title: {
    fontSize:21.3,
    color:'#084442',
    fontWeight:'600',
    fontFamily: 'Work Sans',
    lineHeight: 57,
  },
  paragraph: {
    color: "#1B1B1B",
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Work Sans',
    lineHeight: 24,
    textAlign:'left'
  },
  
});

export default PrivacyScreen;