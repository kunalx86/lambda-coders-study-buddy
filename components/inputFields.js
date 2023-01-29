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
const CustomInputField = ({ onChange, utility }) => {
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
            <View>
                <Text style={styles.titleText}>{utility.title}</Text>
                <View >
                    <TextInput
                        style={styles.formInputs}
                        placeholder={utility.placeholder}
                        placeholderTextColor="#95a5a6"
                        onChangeText={text => { onChange(text) }}
                        value={utility.value}
                        multiline={true}
                        numberOfLines={3}
                    />
                </View>
            </View>
        );
    }
}

export default CustomInputField;
const styles = StyleSheet.create({

    titleText: {
        fontFamily: "Quicksand-Bold",
        marginTop: 5,
        fontSize: 15,
        marginBottom: hp("1%")
    },
    formInputs: {
        height: hp("6%"),
        
        borderRadius: 5,
        backgroundColor: "#ecf0f1",
        fontFamily: "Quicksand-regular",
        paddingHorizontal: "5%",
        marginVertical: "2%",
        fontSize: 16,
        color: "#34495e"
    },
});