import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
const WorkerCard = ({ handleConfirm, title }) => {
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

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }
    ];

    if (!dataLoaded) {
        return (
            <View>

                <Text>Loading....</Text>
            </View>
        );
    } else {
        return (

            <TouchableOpacity onPress={()=>handleConfirm("Abdul Ansari")}>
                <View style={styles.cardContainer}>
                    <View style={styles.textContainer}>
                        <View style={styles.row}>
                            <Image source={{ uri: 'https://static.toiimg.com/thumb/msid-71313165,imgsize-148656,width-800,height-600,resizemode-75/71313165.jpg' }}
                                style={{ width: wp("15%"), height: wp("15%"), borderRadius: 30 }} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.userName}> Abdul Ansari</Text>
                                <FlatList
                                    // style={{ marginBottom: hp("10%") }}
                                    numColumns={1}
                                    horizontal={true}                // set number of columns 

                                    data={DATA}
                                    renderItem={({ item }) => <View style={[styles.row, { backgroundColor: "#c8d6e5", height: wp("6.5%"), borderRadius: 10, paddingHorizontal: wp("1.5%"), marginHorizontal: wp("1%") }]}>
                                        <FontAwesome name="building-o" size={12} color="black" />
                                        <Text style={styles.flatNo}> E2/15</Text>
                                    </View>}
                                    keyExtractor={item => item.id}
                                />

                            </View>
                        </View>


                    </View>
                </View>

            </TouchableOpacity>

        );
    }
}

export default WorkerCard;
const styles = StyleSheet.create({
    cardContainer: { margin: wp("3%"), backgroundColor: "white", elevation: 5, padding: wp("4%"), borderRadius: wp("3%"), justifyContent: "space-between", borderLeftWidth: 4, borderColor: Colors.primaryColor },
    textContainer: {},
    userName: { fontFamily: "Quicksand-Bold", fontSize: 20, paddingBottom: wp("0.8%") },
    flatNo: { fontFamily: "Quicksand-SemiBold" },
    row: { flexDirection: "row", alignItems: "center", paddingBottom: wp("1%"), }
});