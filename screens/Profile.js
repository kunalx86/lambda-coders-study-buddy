import React, { useState, useEffect } from "react";
import Colors from "../constants/colors";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Linking,
  Platform,
  Share,
} from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SettingCard from "../components/settingCard";
import ProfileCard from "../components/profileCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "../constants/text";
import * as Animatable from "react-native-animatable";
import Texts from "../constants/text";
import axios from "axios";
import { ListItem } from "@react-native-material/core";

export default function Profile({ navigation }) {
  const logout = async () => {
    try {
      // Keep on showing the SlashScreen

      axios
        .get(`${Constants.ApiLink}/api/logout`)
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
        });

      navigation.navigate("Login");
    } catch (e) {
      console.warn(e);
    } finally {
      setDataLoaded(true);
      // Hiding the SplashScreen
    }
  };

  const [dataLoaded, setDataLoaded] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  const [memberName, onChangememberName] = useState("");
  const [memberPhone, onChangememberPhone] = useState("");
  const [userType, onChangeUserType] = useState("");
  const [SecurityeModal, SecurityModal] = useState(false);
  const [userData, setUserData] = useState({});

  const handleSupportPress = (state) => {
    setSupportModal(state);
  };

  const init = async () => {
    try {
      await AsyncStorage.getItem("userData").then((response) => {
        response = JSON.parse(response);
        console.log("Data: ", response.data);
        setUserData({
          name: response.data.user_name,
          phone: response.data.user_phone,
          email: response.data.user_email,
          userType: response.data.user_type,
        });
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setDataLoaded(true);
      // Hiding the SplashScreen
    }
  };

  useEffect(() => {
    init();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Sahayak is much better than MyGate in terms of UI. Thanks to Ram Suthar ;}",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (!dataLoaded) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    const profile_values = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    };

    const addMember_values = {
      icon: <AntDesign name="adduser" size={22} color={Colors.primaryColor} />,
      main_text: "Add Family Member / Tenant",
      bg_color: "#786",
      arrow: false,
    };
    const support_values = {
      icon: (
        <SimpleLineIcons name="support" size={22} color={Colors.primaryColor} />
      ),
      main_text: "Support & Feedback",
      bg_color: "#123",
      arrow: true,
    };
    const share_values = {
      icon: (
        <SimpleLineIcons
          name="share-alt"
          size={22}
          color={Colors.primaryColor}
        />
      ),
      main_text: "Tell your friends about us",
      bg_color: "#456",
      arrow: true,
    };
    const logout_values = {
      icon: <AntDesign name="logout" size={22} color="#e74c3c" />,
      main_text: "Logout",
      bg_color: "#316",
      arrow: false,
    };
    return (
      <SafeAreaView style={styles.safeview}>
        
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <View style={{ paddingHorizontal: wp("4%") }}> */}
            <View style={{ paddingTop: "4%" }}>
              <TouchableOpacity style={{ position: "absolute", top: hp("2%") }}>
                <MaterialIcons
                  onPress={() => navigation.navigate("Home")}
                  name="keyboard-backspace"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              {/* </View> */}
            </View>
            <View style={styles.title}>
              <Text
                style={{
                  color: "white",
                  fontSize: wp("8.5%"),
                  marginLeft: wp("1%"),
                  fontFamily: "Quicksand-Bold",
                }}
              >
                {"Profile"}
              </Text>
            </View>
            <View style={styles.username}>
              <Text
                style={{
                  color: "white",
                  fontSize: wp("5%"),
                  marginLeft: wp("1%"),
                  fontFamily: "Quicksand-medium",
                }}
              >
                {Texts.Profile.accountInformation}
              </Text>
            </View>
          </View>
        </View>
        <Animatable.View style={styles.circle} animation="fadeInUpBig">
        
            <View
              style={{
                backgroundColor: "white",
                width: wp("92%"),
                marginHorizontal: wp("4%"),
                borderRadius: hp("2%"),
                elevation: 4,
                paddingHorizontal: wp("2%"),

                paddingVertical: hp("2.5%"),
              }}
            >
              <View
                style={{
                  paddingHorizontal: wp("4%"),
                  paddingVertical: hp("2%"),
                }}
              >
                <Text style={styles.settingDivider}>
                  {Texts.Profile.credentials}
                </Text>
              </View>
              <ProfileCard custom_values={profile_values}></ProfileCard>
              {/* <TouchableOpacity onPress={() => {setSupportModal(true)}}>
                            <SettingCard custom_values={support_values} handlePress={setSupportModal}/>
                        </TouchableOpacity> */}
                
              <View
                style={{
                  paddingHorizontal: wp("4%"),
                  paddingBottom: hp("1.2%"),
                  paddingTop: hp("3%"),
                }}
              >
                <Text style={styles.settingDivider}>{"Your details"}</Text>
              </View>
              <View  style={{
                  paddingHorizontal: wp("4%"),
                  marginBottom: hp("1.2%"),
                  paddingTop: hp("3%"),
                }}>
                <ListItem title="Standard" secondaryText="7 " />
                <ListItem title="Gender " secondaryText="Male" />
                <ListItem title="Cluster" secondaryText="1-Study Good, Score Good" />
                <ListItem title="Interests" secondaryText="WebDev, FLask" />
                <ListItem title="Lunch" secondaryText="Standard" />
              </View>
            </View>
          
       
            
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
  },
  container: {
    height: hp("31%"),
    width: wp("100%"),
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    marginBottom:20
  },
  header: {
    flex: 1,
    position: "relative",
    paddingHorizontal: wp("4%"),
    paddingBottom: hp("5%"),
  },
  circle: {
    flex: 1,
    position: "absolute",
    top: hp("22%"),
  },
  title: {
    flexDirection: "row",
    marginTop: hp("7%"),
    marginHorizontal: wp("2%"),
  },
  username: {
    flexDirection: "row",
    marginHorizontal: wp("2%"),
  },
  openButton: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: wp("2%"),
    elevation: 2,
  },
  formInputs: {
    height: hp("3.5%"),
    width: wp("70%"),
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
    fontFamily: "Quicksand-medium",
    paddingHorizontal: wp("2.5%"),
    marginVertical: hp("0.8%"),
    color: "#34495e",
  },
  settingDivider: {
    fontFamily: "Quicksand-SemiBold",
    color: "#95a5a6",
  },
});
