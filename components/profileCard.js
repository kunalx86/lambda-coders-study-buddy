import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, SafeAreaView,  View, Image, TextInput, Keyboard, Modal, ToastAndroid } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UserAvatar from 'react-native-user-avatar';
import { Entypo } from '@expo/vector-icons';
import ModalButton from '../components/modalButton';
import Texts from '../constants/text'
import axios from "axios";
import { Text,ListItem  } from "@react-native-material/core";

const ProfileCard = ({ custom_values }) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
    const [name, onChangeName] = useState(null);
    

    const resetModalInfo = () => {
        onChangeName('')
      
    }

    const editProfile = () => {
        Keyboard.dismiss()
        var data = {}
        if (name) {
            data['name'] = name
        }
        if (email) {
            data['email'] = email
        }
        data['id'] = 'X8E6gpS3CjHhA3FuhcnM'
        data['societyId'] = 'NXZyFd6qMbzJPtBPygoq'
        console.log(data)
        try {
            axios.post("https://us-central1-sahayak-a912a.cloudfunctions.net/app/edit_profile", data).then(response => {
                console.log(response.data);
                if (response.status == 200) {
                    ToastAndroid.showWithGravityAndOffset(
                        response.data.message,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }
                setModalVisible(false)
            })
        } catch (error) {
            if (response.status == 200) {
                ToastAndroid.showWithGravityAndOffset(
                    "error while adding into notices : "+error,
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            }
            setModalVisible(false)
        }
    };

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
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.avatar}>
                        <UserAvatar bgColor={Colors.primaryColor} size={50} name={custom_values.name} />
                    </View>
                    <View style={styles.userDetails}>
                        <View style={styles.userdata}>
                            {/* <Text style={styles.fontStyle}>{custom_values.name}</Text> */}
                            <Text variant="h6" >{"Rudra Trivedi"}</Text>
                            <Text>{"60004210106"}</Text>

                        </View>
                        

                    </View>
                    
                </View>
               
            </View>
        );
    }
}

export default ProfileCard;
const styles = StyleSheet.create({
    card: {
        borderRadius: 8,

        backgroundColor: "#fff",

        marginHorizontal: wp("1.3%"),

    },
    cardContent: {
        flexDirection: "row",
        marginHorizontal: wp("1.8%"),
        marginVertical: hp("1%"),
    },

    userdata: {
        marginHorizontal: wp("1.8%"),
    },
    editBtn: {
        marginLeft: "auto",
        marginTop: hp("1.5%")
    },
    userDetails: {
        flexDirection: "column",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: wp("3.5%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: wp("80%"),
        height: hp("40%")
    },
    openButton: {
        justifyContent: "center",
        marginLeft: "auto",
        borderRadius: 20,
        padding: wp("2%"),
        elevation: 2
    },
    formInputs: {
        height: hp("6%"),
        borderRadius: 5,
        backgroundColor: "#ecf0f1",
        fontFamily: "Quicksand-regular",
        paddingHorizontal: wp("4%"),
        marginVertical: hp("0.5%"),
        fontSize: wp('4%'),
        color: "#34495e"
    },
    modalHeader: {
        fontFamily: "Quicksand-medium",
        fontSize: wp('4.2%'),
        marginBottom: hp("1%")
    },
    fontStyle: {
        fontFamily: "Quicksand-Bold",
        fontSize: wp('4%')
    }
});