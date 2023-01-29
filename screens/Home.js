import React from 'react';
import {StyleSheet,Dimensions,Image,TextInput,  TouchableOpacity, View } from 'react-native';

import { Text } from "@react-native-material/core";
import Toolbar from '../components/toolbar';

export default function Home({ navigation }) {
   
    
    return (

        // <Text>{"hello"}</Text>
        // <CameraPage navigation={navigation} />
          
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.tagline}>Welcome to</Text>

            <Text style={styles.tagline}>Study Buddy</Text>
           
        </View>
            <Toolbar  navigation={navigation}/>
          </View>

        
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:"100%",
        // backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf:'center'
    },
    logo: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 1.6,
        // alignSelf: 'flex-start',
        marginBottom: '8%'
    },
    tagline: {
        fontFamily: "Quicksand-Bold",
        fontSize: Dimensions.get('window').width / 10,
    }})