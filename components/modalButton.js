import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const fetchFonts = () => {
//     console.log("loading font");
//     return Font.loadAsync({
//         "Quicksand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
//         "Quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
//         "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
//         "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
//     });
// };
const ModalButton = ({ handlePress, title }) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const init = async () => {
        try {
            // Keep on showing the SlashScreen
            console.log("wait");
            // await fetchFonts();
        } catch (e) {
            console.warn(e);
        } finally {
            setDataLoaded(true);
            // Hiding the SplashScreen

        }
    }

    useEffect(() => {
        init();
    }, []);


    if (!dataLoaded) {
        return (
            <View>

                <Text>Loading....</Text>
            </View>
        );
    } else {
        return (

            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors.primaryColor,padding:hp("1.8%"),borderRadius:15,marginTop:hp("2%") }} onPress={()=>handlePress}>

                <Text style={{color:"white",fontFamily:"Quicksand-Bold",fontSize:16}}>{title}</Text>

            </TouchableOpacity>

        );
    }
}

export default ModalButton;
const styles = StyleSheet.create({

});