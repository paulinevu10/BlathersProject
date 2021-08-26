import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const landingScreen = props => {
    return (
        <ImageBackground 
            style={styles.backgroundImage} 
            source={require('../assets/images/victor-elvira-avalos-tb8G24Fw_ks-unsplash.jpg')}
        >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
  
export default landingScreen;