import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  Keyboard
} from "react-native";
import {
  FontAwesome5,
} from "@expo/vector-icons";
import {ifelem} from '../constants/icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import useFetch from '../../hook/useFetch';
import MailComponent from "../contact/MailComponent";
import PhoneComponent from "../contact/PhoneComponent";
import UrlLink from "../contact/UrlLink";



export default function Search({ recieveData }) {
  const screenDimensions = Dimensions.get('screen');
  const { data, isLoading, error } = useFetch(`companies`)
  const [searchText, setSearchText] = useState('');
  const [isSearching, setisSearching] = useState(false)
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{
          marginRight: 5, 
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          }}>
            <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.navigate("Home")}>
          <Image
          source={ifelem}
          resizeMode='cover'
          style={{width: 30,
            height: 30,}}
        />
            </TouchableOpacity>
        </View>
        ),
    });
  })

  
  const handleSearch = (text) => {
    if (text.length > 0) {
      setisSearching(true)
      recieveData(true)
    } else  {
      setisSearching(false)
      recieveData(false)
    }
    setSearchText(text);
    const filteredItems = data.filter((item) =>
      item?.company_name.toLowerCase().includes(text.toLowerCase()),
    );
        setFilteredData(filteredItems)
  };

  const renderListItem = ({ item }) => (
    <MyListItem
    item={item}
  />
  );
 
  const clearInput = () => {
    setSearchText('')
    Keyboard.dismiss()
    recieveData(false)
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", width: screenDimensions.width}}>
        <View style={{ position: 'relative', width: '85%'}}>
          <TextInput
            style={styles.input}
            placeholder="entreprises"
            placeholderTextColor="#666666"
            onChangeText={handleSearch}
            value={searchText}
          /> 
          {isSearching ? 
          (
              <FontAwesome5
              onPress={() => clearInput()}
                style={styles.icone}
                name="times-circle"
                size={18}
                color="black"
              />
           ) : (  
          <FontAwesome5
            style={styles.icone}
            name="search"
            size={18}
            color="black"
          /> 
          )}
        </View>
        <View>
        <Text style={styles.title1}>Recherchez sur <Text style={{color: '#55a369', fontWeight: 'bold'}}>i-FELEM</Text></Text>
        </View>
        <View style={styles.home}>
          {filteredData.length <= 0 && isSearching ?
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'grey'}}>Pas de résultat</Text>
          : (
            <FlatList
            data={filteredData}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
            /> 
        )}
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const MyListItem = React.memo(({ item }) => {
  const screenDimensions = Dimensions.get('screen');
  let color = ''
  if (item.subcategory_id <= 7) {
    color = '#ee8922'
  }
  if (item.subcategory_id <= 20 && item.subcategory_id > 7) {
    color = '#2b5fac'
  }
  if (item.subcategory_id <= 32 && item.subcategory_id > 20) {
    color = '#7a69a4'
  }
  if (item.subcategory_id > 32) {
    color = '#895874'
  }
  const tel = item.phone
  const email = item.email
    return (
      <View key={item.id} style={{ marginTop: 15, width: screenDimensions.width, marginBottom: 20 }}>
              
               <View style={{marginTop: 4, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', backgroundColor: color, color: 'white', textAlign: 'center', paddingHorizontal: 4}}>{item?.company_name.toUpperCase()}</Text>
                      </View>
                      <View style={{marginTop: 8,
                      paddingHorizontal: 25,
                      borderRadius: 14,
                      display: "flex",
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: "center",
                      justifyContent: "space-between"}}>
                    <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold' , maxWidth: "80%" }}>{item.adresse}</Text>
                    <FontAwesome5  name="map-marker-alt" style={{marginRight: 2}} size={20} color="#56a56b"  />
                      </View>
                  <View style={{marginTop: 2, paddingHorizontal: 10}}>
                  
    
            <PhoneComponent shouldRender={tel} />
            <MailComponent shouldRender={email} />
            <UrlLink shouldRender={item.siteweb} />
            </View>
              </View>
    );
});


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
    top: "38%",
    right: "10%",
  },
});
