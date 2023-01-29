import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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
const colors = ['white'];
const SettingCard = ({ custom_values, handlePress }) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const init = async () => {
        try {
            // Keep on showing the SlashScreen

            // await fetchFonts();
            console.log("comment")
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
            <TouchableOpacity onPress={() => handlePress(true)}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={{ height: wp("12%"), width: wp("12%"), backgroundColor: "#ecf0f1", borderRadius: 50, justifyContent: "center", alignItems: "center", marginRight: wp("3%") }}>

                            {custom_values.icon}
                        </View>
                        {/* <View style={[styles.background_color, {backgroundColor:custom_values.bg_color}]}>
                            <View style={styles.icon_holder}>
                                {custom_values.icon}
                            </View>
                        </View> */}
                        <Text style={custom_values.main_text == "Logout" ? [styles.fontStyle, { color: "#e74c3c" }] : styles.fontStyle}>{custom_values.main_text}</Text>
                        <View style={{ alignItems: "flex-end", marginLeft: "auto" }}>
                            {custom_values.arrow ? <AntDesign name="right" size={22} color="#7f8c8d" /> : null}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SettingCard;
const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        marginHorizontal: wp("1.3%"),
    },
    cardContent: {
        flexDirection: "row",
        marginHorizontal: wp("1.8%"),
        marginVertical: hp("1%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_holder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp("0.5%")
    },
    background_color: {
        borderRadius: 5,
        marginRight: hp("1%"),
        height: hp("4%"),
        width: wp("8%"),
    },
    fontStyle: {
        fontFamily: "Quicksand-Bold",
        fontSize: wp('4%')
    }
});