import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, Text,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../constants/styles';
import Profile from '../screens/Profile';

export default function Toolbar({  navigation }) {
   


     function account() {
        navigation.navigate('Profile')
    }

    return (
        <Grid style={styles.bottomToolbar}>
            <Row>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity  style={styles.alignCenter} onPress={() => navigation.navigate('EntryRecords')}>
                        <MaterialIcons name="today" size={30}  />
                        <Text>Calander</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
                        <MaterialIcons style={{alignSelf:"center"}} name="description" size={30}  />
                        <Text>Documents</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('Recommendation')}>
                        <MaterialIcons style={{alignSelf:"center"}} name="assistant" size={30}  />
                        <Text>Course</Text>
                    </TouchableOpacity>
                </Col>
                
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
                        <MaterialIcons style={{alignSelf:"center"}} name="forum" size={30}  />
                        <Text>Attendance</Text>
                    </TouchableOpacity>
                </Col>
                
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <MaterialIcons style={{alignSelf:"center"}} name="person" size={30}  />
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </Col>
               
                
            </Row>
        </Grid>);
}