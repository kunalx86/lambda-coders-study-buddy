import React from 'react';
import { LogBox } from "react-native"

import * as Font from 'expo-font';
import Login from './screens/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import GeneralStatusBarColor from './components/GeneralStatusBar';
import Colors from './constants/colors'
import Home from './screens/Home';
import Register from './screens/register';
import EntryRecords from './screens/entryRecord'
import Profile from './screens/Profile'
import Recommedation  from './screens/Recommendation'
import Documents  from './screens/Documents'
import Attendance  from './screens/Attendance'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerShown: false, //this will hide the header
      headerLeft: null

    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerShown: false //this will hide the header
    },
  },
  Recommendation: {
    screen: Recommedation,
    navigationOptions: {
      title: 'Recommendation',
      headerShown: true, //this will hide the header
      headerStyle: {
        backgroundColor: '#534AC0',
        
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }, //this will hide the header
    },
  },
  Documents: {
    screen: Documents,
    navigationOptions: {
      title: 'Documents',
      headerShown: true, //this will hide the header
      headerStyle: {
        backgroundColor: '#534AC0',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: {
      title: 'Attendance',
      headerShown: true, //this will hide the header
      headerStyle: {
        backgroundColor: '#534AC0',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  EntryRecords: {
    screen: EntryRecords,
    navigationOptions: {
      title: 'Time Table',
      headerShown: true, //this will hide the header
      headerStyle: {
        backgroundColor: '#534AC0',
        
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }, //this will hide the header
    },
  },
  Register:{
    screen: Register,
    navigationOptions:{
      title: 'Register',
      headerShown: false
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      title: 'Profile',
      headerShown: false
    }
  }
  
},

  {
    initialRouteName: 'Login',
  });

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  
  Font.loadAsync({
    "Quicksand-regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });
  LogBox.ignoreAllLogs(true)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GeneralStatusBarColor backgroundColor={Colors.primaryColor} barStyle="light-content" />
        <AppContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});





