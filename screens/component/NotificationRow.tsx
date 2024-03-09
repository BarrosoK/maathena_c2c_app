import React from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        paddingBottom:23,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 16,
        color: '#1B1B1B',
        fontWeight:'400',
        fontFamily:'Work Sans',
        lineHeight: 28.6,
        textAlign: 'left' 
    },
    switch:{
    }
      
});

const NotificationRow = ({ title }) => (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={this.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={this.isEnabled}
            style={styles.switch}
        />
    </View>
);

export default NotificationRow;