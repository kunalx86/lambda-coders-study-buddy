import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback,StyleSheet, BackHandler, Alert } from 'react-native';
import { Camera,requestCameraPermissionsAsync } from 'expo-camera';
import styles from '../constants/styles';
import Toolbar from '../components/toolbar';
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from "axios";
import Texts from "../constants/text";
import Constants from '../constants/text'



export default function CameraPage({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [Image, setImage] = useState(null)
    
    const [type, setType] = useState(Camera.Constants.Type.back);
    const logout = async () => {
        try {
            // Keep on showing the SlashScreen

            axios
                .get(`${Constants.ApiLink}/api/logout`)
                .then(async function (response) {
                    // handle success
                    navigation.navigate('Login')


                    try {
                        const jsonValue = JSON.stringify(response.data);
                        // await AsyncStorage.setItem("userData", jsonValue);
                        console.log("data: " + jsonValue);
                    } catch (e) {
                        // saving error
                        console.log("Got error while storing data to async" + e);
                    }
                })

            navigation.navigate('Login')
        } catch (e) {
            console.warn("",e);
        } finally {
            setDataLoaded(true);
            // Hiding the SplashScreen

        }
        return true;

    }
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => logout()}
        ]);
        return true;
      };
    
      useEffect(() => {
        if (navigation.state.routeName == 'Home') {
            BackHandler.addEventListener("hardwareBackPress", backAction);
        
            return () =>
              BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
       
      }, []);

    useEffect(() => {
        (async () => {
            const { status } = await requestCameraPermissionsAsync();
            console.log("log33",status)
            setHasPermission(status === 'granted');
        })();
    }, []); 
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                setCameraRef(ref);
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <Toolbar cameraRef={cameraRef} navigation={navigation}/>
                </View>
            </Camera>
        </View>
    );
}
