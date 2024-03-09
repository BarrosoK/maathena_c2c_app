import React, { useState } from 'react';
import { View, Text, Pressable,StyleSheet } from 'react-native';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={item.value === userOption ? styles.selectedoption : styles.unselectedoption}> {item.value}</Text>
            {item.tooltip?<Text style={item.value === userOption ? styles.selectedtooltip : styles.tooltip}>{item.tooltip}</Text>:''}
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tooltip:{
    fontSize: 11,
    color: '#084442',
    fontWeight:'400',
    fontFamily:'Work Sans',
    lineHeight: 28.6,
    textAlign: 'center',
  },
  selectedtooltip:{
    fontSize: 11,
    color: '#ffffff',
    fontWeight:'400',
    fontFamily:'Work Sans',
    lineHeight: 28.6,
    textAlign: 'center',
  },
  container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      gap:14,
      alignItems:'center'
  },
  selectedoption: {
      fontSize: 21.3,
      color: '#ffffff',
      fontWeight:'500',
      fontFamily:'Work Sans',
      lineHeight: 41.1,
      textAlign: 'center',
  },
  unselectedoption:{
      fontSize: 21.3,
      color: '#084442',
      fontWeight:'500',
      fontFamily:'Work Sans',
      lineHeight: 41.1,
      textAlign: 'center',
  },
  unselected: {
    backgroundColor: '#0844421F',
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 18,
    borderRadius: 5,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#084442',
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 18,
    borderRadius: 5,
    textAlign: 'center',
    color:'#fff'
  },
  });
  