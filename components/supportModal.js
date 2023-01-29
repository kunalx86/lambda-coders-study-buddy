import React, { useState, useEffect, TextInput } from "react";
import { StyleSheet, Text, View, Modal,Linking,Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import CustomInputField from './inputFields';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ModalButton from './modalButton';
import Colors from '../constants/colors'
import Texts from '../constants/text'

const SupportModal = ({ handlePress, visibility }) => {

    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={visibility} onRequestClose={() => { handlePress(!visibility); }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View>
                                <Text style={styles.modalHeader}>{Texts.Profile.supportTitle} </Text>
                            </View>
                            <View style={{ backgroundColor: Colors.primaryColor, padding: wp("0.5%"), borderRadius: 5, justifyContent: "flex-end", marginLeft: "auto" }}>
                                <Entypo name="cross" size={16} color="white" onPress={() => { handlePress(!visibility); }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View>
                                <Text style={styles.titleText}> {Texts.Profile.suggestion}</Text>
                                <View style={styles.inrow}>
                                    <MaterialIcons name="email" size={24} color="black" />
                                    <Text style={styles.clickAbleText} onPress={() => {
                                        if (Platform.OS === "android") {
                                            emailto = `mailto:sahayak.app.co@gmail.com?subject=Tell%20us%20about%20your%20experience&body=Write%20Your%20Text%20Here`;
                                        } else {
                                            emailto = `mailto:sahayak.app.co@gmail.com?subject=Tell%20us%20about%20your%20experience&body=Write%20Your%20Text%20Here`;
                                        }
                                        Linking.openURL(emailto);
                                    }}>{Texts.Profile.write}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.titleText}>{Texts.Profile.visit}</Text>
                                <View style={styles.inrow}>
                                    <MaterialCommunityIcons name="comment-question" size={24} color="black" />
                                    <Text style={styles.clickAbleText} onPress={() => {
                                        Linking.openURL('http://google.com')
                                    }}>{Texts.Profile.support}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default SupportModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.7)',
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
    },
    modalHeader: {
        fontFamily: "Quicksand-medium",
        fontSize: wp('4.2%'),
        marginBottom: hp("1%")
    },
    titleText: {
        fontFamily: "Quicksand-Bold",
        marginTop: 5,
        fontSize: wp('4%'),
        marginBottom: hp("1%")
    },
    inrow: {
        flexDirection: "row",
    },
    clickAbleText: {
        color: "blue",
        fontFamily: "Quicksand-medium",
        marginHorizontal: hp("1%")
    },
});