import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Pie from 'react-native-pie-chart';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import text from '../constants/text';

class Attendance extends Component {
    state = {
        attendance: {
            Math: { present: 13, absent: 3 },
            Science: { present: 11, absent: 7 },
            English: { present: 14, absent: 3 },
            History: { present: 15, absent: 4 },
        },
    };

    render() {
        const data = Object.keys(this.state.attendance).map(key => {
            const classAttendance = this.state.attendance[key];
            return {
                name: key,
                present: classAttendance.present,
                color: "#fff",
                absent: classAttendance.absent,
            };
        });


        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Attendance Record</Text>
               <Image source={require("../assets/images/Graph.png" )} style={styles.Imagesize}/>
                <View style={styles.legend}>
                    {data.map((item, index) => (
                        <View key={index} style={styles.legendItem}>
                            <View style={[styles.legendColor, { backgroundColor: '#00FF00' }]} />
                            <Text style={styles.legendText}>{`${item.name} - Present: ${item.present}`}</Text>
                        </View>
                    ))}
                    {data.map((item, index) => (
                        <View key={index} style={styles.legendItem}>
                            <View style={[styles.legendColor, { backgroundColor: '#FF0000',  }]} />
                            <Text  style={styles.legendText}>{`${item.name} - Absent: ${item.absent}`}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        
    },
    titleText:{
      fontSize: 24,
    },
    legendText:{
      marginTop: 15,
      fontSize: 15,
    },
    Imagesize:{
      height:hp("40%"), 
      width:("100%"),
      marginBottom: 10
    },
    legend: {
        position: 'absolute',
        bottom: 90,
        left: 0,
        right: 0,
        paddingLeft:15,
        paddingTop:1,
        padding: 2,
        backgroundColor: '#FFFFFF',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColor: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
};

export default Attendance;
