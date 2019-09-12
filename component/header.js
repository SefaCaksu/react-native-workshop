import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
export default class Header extends React.Component
{
    render(){
        return (
            <View style={styles.header}>
            <Image
            style={{width: 157, height: 40}}
            source={{uri: 'https://www.hrpeak.com/assets/images/logo.png'}}
          />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        backgroundColor : 'rgba(0, 0, 0, 0.51)',
        height :50,
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center',
    }
});