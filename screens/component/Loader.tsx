import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
const loader_icon = require('../../assets/img/Loader.png');
class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={[styles.modalBackground,styles.horizontal]}>
            <ActivityIndicator size="large"  color="#B9E6C9" />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 1000
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader