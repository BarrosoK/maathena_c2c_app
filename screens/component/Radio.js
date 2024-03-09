import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
const Radio_unselecticon = require("../../assets/img/Radio_unselect.png");
const Radioicon = require("../../assets/img/Radio.png");
export default function Radio({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.container}>
      {data.map((data, key) => {
        return (
          <View key={key}>
            {data.value === userOption ?
                <TouchableOpacity style={styles.btn}>
                    <Image style={styles.img} source={Radioicon}/>
                    <Text style={styles.radiotext}>{data.value}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => selectHandler(data.value)} style={styles.btn}>
                    <Image style={styles.img} source={Radio_unselecticon} />
                    <Text style={styles.radiotext}>{data.value}</Text>
                </TouchableOpacity>
            }
        </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  radiotext:{
    fontSize: 16,
    color: '#000000',
    fontWeight:'400',
    fontFamily:'Work Sans',
    lineHeight: 28.6,
  },
  btn:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    marginBottom:2,
    alignItems:'center'
  },
  img:{
    height: 14,
    width: 14
  }
});
  