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
const SecurityDashboardCard = ({ handlePress,utilities }) => {
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
                <TouchableOpacity onPress={() => handlePress()} >
                    <View style={{ padding: wp("2%"), justifyContent: "center" }}>
                        <View elevation={5} style={{ backgroundColor: "white", borderRadius: 5, height: hp("20%"), width: wp("38%"), alignItems: "center", justifyContent: "center" }}>
                            <Image source={utilities.icon} style={{ width: wp("15%"), height: wp("15%") }} />
                            <View style={{ paddingTop: hp("1.5%"),paddingHorizontal:wp("1.5%") }}>
                                <Text style={{ fontFamily: "Quicksand-SemiBold", fontSize: 17, textAlign: "center" }}>{utilities.title}</Text>
                                <Text style={{ fontFamily: "Quicksand-medium", fontSize: 11, textAlign: "center" }}>{utilities.description}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SecurityDashboardCard;
const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: wp("1%"), height: hp("1%") },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginHorizontal: wp("1.3%"),
        marginVertical: hp("0.6%"),
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
    }
});