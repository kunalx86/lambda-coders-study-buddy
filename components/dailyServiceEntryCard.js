import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import UserAvatar from 'react-native-user-avatar';


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
const DailyServiceEntryCard = ({ handlePress, service,navigation }) => {
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
    
            <TouchableOpacity onPress={()=>{handlePress(service.title)}}>
                <View style={styles.cardContainer}>
                    <View style={{ width: wp("15%"),justifyContent:"center",alignItems:"center" }}>
                        <Image source={service.icon} style={{ width: wp("12%"), height: wp("12%") }} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>{service.title}</Text>

                    </View>
                </View>

            </TouchableOpacity>

        );
    }
}

export default DailyServiceEntryCard;
const styles = StyleSheet.create({
    cardContainer: { width: wp("28%"), height: wp("30%"), borderColor: "#7f8c8d", margin: wp("3%"), borderWidth: 0.5, padding: wp("4%"), borderRadius: wp("3%"), justifyContent: "space-between", alignItems: "center" },
    textContainer: { alignItems: "center", marginTop: hp("0.5%") },
    userName: { fontFamily: "Quicksand-Bold", fontSize: 16, textAlign: "center",color:"#222f3e" },
    flatNo: { fontFamily: "Quicksand-SemiBold" }

});