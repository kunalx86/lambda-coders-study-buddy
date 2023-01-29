import React, { useState, useEffect } from "react";
import Colors from '../constants/colors';
import { View, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HairLine = () => {
    
        return (
            <View style={{ borderBottomColor: '#D3D3D3', borderBottomWidth: hp("0.1"), marginHorizontal:wp("2%"), }}/>
        );
}

export default HairLine;