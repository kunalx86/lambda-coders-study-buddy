import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity, StatusBar } from 'react-native';
import { Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";
import Constants from '../constants/text';
export default function Register({ navigation }) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [phone, onChangephone] = useState('');
    const [email, onChangeemail] = useState('');
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');
    const [rememberMe, setrememberMe] = useState(false);
    const handleClick = () => setrememberMe(!rememberMe)

    const register = async () => {
        try {
            // Keep on showing the SlashScreen
            const data = {
                "user_email": email,
                "user_name": name,
                "user_phone": phone,
                "user_password": password,
                "user_type": "general"
            }
            axios
                .post(`${Constants.ApiLink}/api/register`, data)
                .then(async function (response) {
                    // handle success

                    try {
                        const jsonValue = JSON.stringify(response.data);
                        // await AsyncStorage.setItem("userData", jsonValue);
                        console.log("data: " + jsonValue);
                    } catch (e) {
                        // saving error
                        console.log("Got error while storing data to async" + e);
                    }
                })


            console.log(name, phone, password);
            navigation.navigate('Home')
        } catch (e) {
            console.warn(e);
        } finally {
            setDataLoaded(true);
            // Hiding the SplashScreen

        }
    }



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.tagline}>Register</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.formInputs}
                    placeholder="Your full name"
                    placeholderTextColor="#95a5a6"
                    onChangeText={text => onChangeName(text)}
                    value={name}
                /><TextInput
                    style={styles.formInputs}
                    placeholder="Your phone"
                    placeholderTextColor="#95a5a6"
                    onChangeText={text => onChangephone(text)}
                    value={phone}
                />
                <TextInput
                    style={styles.formInputs}
                    placeholder="Your email"
                    placeholderTextColor="#95a5a6"
                    onChangeText={text => onChangeemail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.formInputs}
                    placeholder="Your password"
                    placeholderTextColor="#95a5a6"
                    onChangeText={text => onChangePassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.formButton} onPress={register}>
                    <View style={{ backgroundColor: "black", padding: "4%", borderRadius: 10 }}>
                        <FontAwesome5 name="arrow-right" size={20} color="white" />
                    </View>
                    <View style={{ padding: "4%", }}>
                        <Text style={{ fontFamily: "Quicksand-Bold", fontSize: Dimensions.get('window').height / 40 }}>  Sign up</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.textButtonsContainer}>
                    <Text style={styles.labels}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '6%',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
    logo: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 1.6,
        alignSelf: 'flex-start',
        marginBottom: '8%'
    },
    tagline: {
        fontFamily: "Quicksand-Bold",
        fontSize: Dimensions.get('window').width / 12,
    },
    form: {
        paddingTop: "6%"
    },
    formInputs: {
        height: Dimensions.get('window').height / 14,
        borderRadius: 10,
        backgroundColor: "#ecf0f1",
        fontFamily: "Quicksand-SemiBold",
        paddingHorizontal: "5%",
        marginVertical: "2%",
        fontSize: Dimensions.get('window').height / 42,
        color: "#34495e"
    },
    formButton: {
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center",
        marginVertical: "4%"

    },
    checkbox: {
        alignSelf: "center",
        borderRadius: 10,

    },
    rememberMe: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "4%",

    },
    rememberMeLabel: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: Dimensions.get('window').height / 45,
    },
    labels: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: Dimensions.get('window').height / 44,

    },
    textButtonsContainer: {
        paddingRight: "2%",
        justifyContent: "flex-end",
        marginVertical: "6%",
        paddingBottom: "5%"
    },
    textButton: {
        color: Colors.primaryColor,
        fontFamily: "Quicksand-Bold",
        fontSize: Dimensions.get('window').height / 42,
    }
});