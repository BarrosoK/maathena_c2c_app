import React,{useState} from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import NotificationRow from './component/NotificationRow';

const generalList = [
  { title:'Nouvelle offre réduction'},
  { title:'Actu Maathena'},
  {title:'Actu Maathena'},
  {title:'Actu Maathena'},
];
const trackingList = [
  {title: 'Livreur en route'},
  {title: 'Colis réceptionné'},
  {title: 'Colis réceptionné'},
  {title: 'Colis réceptionné'}
];
const NotificationScreen = (props:any) => {
  let { navigate } = props.navigation;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.firstrow}>
        <Text style={styles.header}>Général</Text>
        <FlatList data={generalList}
                  renderItem={({ item }) =>
                    <NotificationRow title={item.title}></NotificationRow>
                  }
              />
        </View>
        <View>
        <Text style={styles.header}>Suivi des colis</Text>
        <FlatList data={trackingList}
                  renderItem={({ item }) =>  <NotificationRow title={item.title}></NotificationRow>}
              />
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color:'#1B1B1B',
    textAlign: 'center',
    fontWeight: '400',
    fontSize:16,
    lineHeight: 28,
    fontFamily:'Work Sans',
  },
  firstrow: {
    marginBottom:20
  },
  header:{
    color:'#084442',
    fontSize:21.3,
    fontFamily:'Work Sans',
    fontWeight:'600',
    lineHeight:57,
    marginBottom: 20
  },
  div: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
});

export default NotificationScreen;