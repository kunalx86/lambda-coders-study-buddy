import { ListItem } from "@react-native-material/core";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { WebView } from 'react-native-webview';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const documents = [
    { name: "Math Syllabus",desc:"This syllabus will be asked in the next TT ", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "Science Notes", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "History Notes", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "Chem Formulas", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "Phy Notes", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "Geography Master Page", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" },
    { name: "History Date Sheet ", link: "https://cbseacademic.nic.in/web_material/CurriculumMain23/SrSec/Maths_SrSec_2022-23.pdf" }
];

const Documents = ({ document, desc,onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
            <Text style={styles.documentTitle}>{document.name}</Text>
        </View>
    </TouchableOpacity>
);

const DocumentViewer = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);

    return (
        <View style={styles.container}>
            <FlatList
                 showsVerticalScrollIndicator={false}
                 showsHorizontalScrollIndicator={false}
                data={documents}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Documents document={item} onPress={() => setSelectedDocument(item)} />
                )}
            />
            { selectedDocument && (
                <WebView
                    source={{ uri: selectedDocument.link }}
                    style={styles.webView}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        width: wp("90%"),
        height: hp("10%"),
        marginBottom: 10,
        // backgroundColor: "#f9c2ff",
        border: "solid",
        borderColor: "#534AC0",
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:"5%",



        
      
    },
    documentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        // textAlign: "center",
    },
    documentdesc: {
        fontSize: 16,
        marginTop: 10,
        // textAlign: "center",
    },
    webView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});

export default DocumentViewer;
