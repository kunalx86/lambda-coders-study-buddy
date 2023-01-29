import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const EntryCard = ({ props }) => {
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
                    <View style={styles.textContainer}>
                        <View style={styles.row}>
                            <Image source={{ uri:props.image_link  }}
                                style={{ width: wp("78%"), height: wp("39%"), borderRadius: 10 }} />
                            {/* <Text style={styles.userName}> Abdul Ansari</Text> */}
                        </View>
                        <View style={styles.row}>
                            <Ionicons name="list" size={12} color="black" />
                            <Text style={styles.flatNo}>  {props.grievance_type}  </Text>

                        </View>
                        <View style={styles.row}>
                            
                        <MaterialCommunityIcons name="list-status" size={15} color="black" />
                            <Text style={styles.flatNo}>  {props.status}  </Text>

                        </View>
                        <View style={styles.row}>
                            <Entypo name="location" size={12} color="black" />
                            <Text style={styles.flatNo}> {props.area}  </Text>
                        </View>
                        <View style={styles.row}>
                            <SimpleLineIcons name="clock" size={11} color="black" />
                            <Text style={styles.flatNo}> {props.assigned_date} </Text>
                        </View>

                    </View>
                </View>

            </TouchableOpacity>

        );
    }
}

export default EntryCard;
const styles = StyleSheet.create({
    cardContainer: { margin: wp("3%"), backgroundColor: "white", elevation: 5, padding: wp("4%"), borderRadius: wp("3%"), justifyContent: "space-between", borderLeftWidth: 4, borderColor: Colors.primaryColor },
    textContainer: {},
    userName: { fontFamily: "Quicksand-Bold", fontSize: 20, paddingBottom: wp("0.8%") },
    flatNo: { fontFamily: "Quicksand-SemiBold" },
    row: { flexDirection: "row", alignItems: "center", paddingBottom: wp("2%") }
});