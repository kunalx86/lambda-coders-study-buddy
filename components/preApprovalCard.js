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
const PreApprovedUser = ({ handlePress, title }) => {
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

            <TouchableOpacity>
                <View style={styles.cardContainer}>
                    <View style={{ width: wp("15%") }}>
                        <UserAvatar bgColor={Colors.primaryColor} size={60} name="Ram Suthar" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>Abdul Ansari</Text>
                        <Text style={styles.flatNo}>E2/15</Text>
                    </View>
                </View>

            </TouchableOpacity>

        );
    }
}

export default PreApprovedUser;
const styles = StyleSheet.create({
    cardContainer:{ width: wp("38%"), margin: wp("3%"), backgroundColor: "white", elevation: 5, padding: wp("4%"), borderRadius: wp("3%"), justifyContent: "space-between", alignItems: "center" },
    textContainer:{ alignItems: "center", marginTop: hp("0.5%") },
    userName:{ fontFamily: "Quicksand-Bold", fontSize: 16 },
    flatNo:{ fontFamily: "Quicksand-SemiBold" }

});