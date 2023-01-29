import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  FlatList,
} from "react-native";
import data from "../assets/data/Scraped_Courses.json";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const Card = ({ website, description, link }) => {
    console.log(link);
  return (
    <TouchableOpacity onPress={()=>Linking.openURL(link)}>
      <View style={styles.cardContainer}>
      {
    website === "Udemy" ? 
      <Image source={{ uri: "https://i.postimg.cc/d0t86xP2/Udemy.png" }} style={styles.thumbnail} /> 
    : website === "Coursera" ? 
      <Image source={{ uri: "https://i.postimg.cc/nh14vt5V/Coursera.png" }} style={styles.thumbnail}/>:
      <Image source={{ uri: "https://i.postimg.cc/Pq31RQTB/Edx.png" }} style={styles.thumbnail}/>}
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

const Recommendation = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [filterSubject, setFilterSubject] = useState("");

  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(filterSubject.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.filterInput}
        onChangeText={(text) => setFilterSubject(text)}
        value={filterSubject}
        placeholder="Filter by subject"
      />
      <FlatList
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
        data={filteredData}
        numColumns={2}
        keyExtractor={(item) => item.Name}
        renderItem={({ item }) => (
          <Card
            website={item.Website}
            description={item.Name}
            link={item.Link}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: '5%',
    paddingVertical:"5%",
    justifyContent: "center",
  
  },
  filterInput: {
    width: "90%",
    height: 40,
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
    borderColor: "Colors.primaryColor",
    borderWidth: 1,
  },
  cardContainer: {
    width:wp("45%"),
    height: 200,
    marginBottom: 10,
   
    alignItems: "center",
    justifyContent: "center",
   
  },
  thumbnail: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Recommendation;
