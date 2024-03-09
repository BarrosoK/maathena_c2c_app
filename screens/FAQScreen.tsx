import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Faqrow from './component/FaqRow';
const profileData = [
  {
    label:'Comment suivre ma livraison ?',
    data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. Nunc rutrum leo sit amet eros pellentesque, utinom auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.'
  },
  {
    label:'Comment annuler une livraison ?',
    data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. Nunc rutrum leo sit amet eros pellentesque, utinom auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.'
  },
  {
    label:'Encore une autre question ?',
    data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. Nunc rutrum leo sit amet eros pellentesque, utinom auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.'
  },
  {
    label:'Et encore une ?',
    data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. Nunc rutrum leo sit amet eros pellentesque, utinom auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.'
  },
  {
    label:'Et une dernière question ?',
    data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id viverra ligula. Nunc rutrum leo sit amet eros pellentesque, utinom auctor dui suscipit. Phasellus eu imperdiet ante. Fusce pellentesque tincidunt dictum.'
  }
];

const FAQScreen = (props:any) => {
   let { navigate } = props.navigation;
   const handleContactBtnPress = () => navigate('contact');
   const itemClickListener = (screenname:any) => {navigate(screenname)};
  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <View>
        <Text style={styles.header}>Suivi des livraisons</Text>
        <FlatList
                  data={profileData}
                  renderItem={({ item }) =>
                  <Faqrow
                      label={item.label}
                      data={item.data}
                      onPress={()=>itemClickListener(item.label)}
                  />
                }
              />
        </View>
      </View>          
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize: 21.3,
    color: '#084442',
    fontWeight:'600',
    fontFamily:'Work Sans',
    lineHeight: 57.6,
    textAlign: 'left',
  },
  div: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 25
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
});

export default FAQScreen;