import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const landingScreen = (props) => {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#bee893',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
    button: {
        alignItems: 'center',
        paddingTop: '170%',
    },
    insideButton: {
        height: 50,
        width: 200,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonText: {
        
    }
});
  
export default landingScreen;
