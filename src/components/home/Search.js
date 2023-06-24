import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import {
  FontAwesome5,
} from "@expo/vector-icons";
import { home, searchGreen, group, enveloppe } from '../constants/icons'
import React, { useState, useEffect } from "react";
import useFetch from '../../hook/useFetch';

export default function Search({ navigation }) {
  const screenDimensions = Dimensions.get('screen');
  const { data, isLoading, error } = useFetch(`companies`)
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleOpenPhoneDialer = async (phone) => {
    const phoneNumber = phone; 
    const phoneUrl = `tel:${phoneNumber}`;

    try {
      await Linking.openURL(phoneUrl);
    } catch (error) {
      console.error('Failed to open phone dialer:', error);
    }
  };
  const handleSearch = (text) => {
    setSearchText(text);

    const filteredItems = data.filter((item) =>
      item.company_name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filteredItems);
  };

  const renderListItem = ({ item, index }) => (
    <View key={index} style={{ marginTop: 15, width: screenDimensions.width }}>
                    
              <View style={{marginTop: 2, paddingHorizontal: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.company_name}</Text>
                <Text style={{fontSize: 18, color: 'grey', fontWeight: 'bold'}}>{item.description}</Text>

        </View>
            <View style={styles.home2}>
                <Text style={{fontSize: 16}}>{item.phone}</Text>
                <TouchableOpacity onPress={() => handleOpenPhoneDialer(item.phone)}>

                <FontAwesome5  name="phone" size={20} color="#55a369"  />
                </TouchableOpacity>
        </View>
            <View style={styles.home2}>
                <Text style={{fontSize: 16}}>{item.email}</Text>
            <FontAwesome5  name="sms" size={20} color="#55a369" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>

            <View style={{ width: '80%', borderBottomWidth: 1, borderBottomColor: 'black'}}></View>
            </View>
            </View>
  );

  return (
    <View style={{  flex: 1, backgroundColor: "#fff", alignItems: "center", width: screenDimensions.width}}>
        <View style={{ width: '80%'}}>
          <TextInput
            style={styles.input}
            placeholder="entreprises"
            placeholderTextColor="#666666"
            onChangeText={handleSearch}
            value={searchText}
          />
          <FontAwesome5
            style={styles.icone}
            name="search"
            size={20}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.title1}>Recherchez sur notre app</Text>
        </View>
        <View style={styles.home}>
        <FlatList
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
        </View>
      <StatusBar style="auto" />
      <View style={{position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: screenDimensions.width,
    bottom: 0,
    height: 55,
    zIndex: 2
    }}>
        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={home} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Search")}
        >
          <Image source={searchGreen} style={styles.logofooter}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Partenaire")}
        >
          <Image source={group} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Image source={enveloppe} style={styles.logofooter}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    justifyContent:'center',
    width : 100,
  },
logofooter:{
  width : 30,
  height :30
},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  home: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    width: 410,
    backgroundColor: "#000",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  home2 : {
    marginTop: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    display: "flex",
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardContainer: {
    width: 300,
    backgroundColor: "#fff",
    height: 325,
    marginBottom: 70,
    borderColor: "#000",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 1,
    elevation: 2,
    
  },
  imageStyle: {
    height: 200,
    width: 250,
    resizeMode: "stretch",
    marginTop: 4,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
  star: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signIn: {
    height: 30,
    width: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#192a56",
    marginTop: 16,
    marginLeft: 87,
  },
  textbtn: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "320",
    textAlign: "center",
    color: "#56a56b",
    marginTop: 15,
  },
  title1: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    color: "#192a56",
    marginBottom: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    bottom: 0,
    height: 55,
  },
  icon1: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    justifyContent: "center",
    width: 100,
  },
  info: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 7,
  },
  icone: {
    position: "absolute",
    top: "30%",
    right: "10%",
  },
});
