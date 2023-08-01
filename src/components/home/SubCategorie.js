import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import useFetch from '../../hook/useFetch';
import {FontAwesome5} from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Time from './time/Time';
import {ifelem} from '../constants/icons';
import Loader from '../common/loader/Loader';

export default function SubCategorie() {
  const screenDimensions = Dimensions.get('screen');
    const navigation = useNavigation();
    const [nameCategorie, setNameCategorie] = useState('')
    const route = useRoute();
    const { data, isLoading, error, refetch } = useFetch(`categories/${route.params.categorieID}`);
    const color = data.color
    const [filteredData, setFilteredData] = useState([]);
    const handleNavigatePress = (categorie) => { 
      categoriename = categorie.name.toUpperCase()
    navigation.navigate('Companies', {categorie ,categoriename, color});
    };

    const headerTitle  = route.params?.nameCategorie;
    const colorofCategorie = route.params?.colorCategorie

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: headerTitle,
      headerTitleStyle: {
        color: colorofCategorie,
        fontSize: 18
      },
      headerRight: () => (
        <Image
              source={ifelem}
              resizeMode='cover'
              style={styles.btnImg}
            />
      )
    });
  }, [navigation, headerTitle]);

    return (

    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl
        refreshing={isLoading}
        onRefresh={refetch}
        colors={['#55a369']}
        progressBackgroundColor="#fff"
      />
    }
    >  
    <View>
     

      <View style={{padding: 10, backgroundColor: "white"}}>
      {isLoading ? (
         <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>

         <Loader />
       </View>
        ) : error ? (
          <Text>Quelque chose s'est mal passé.</Text>
        ) : (
        data.subcategories?.map((item, index) => {
          if (item.id !== 7 && item.id !== 44 && item.id !== 45) {
            return (
              <TouchableOpacity style={{marginTop: 5}} key={item.id} activeOpacity={0.8} onPress={() => handleNavigatePress(item)}>
              <View  style={{ height: 'auto', borderColor: color, marginTop: 8, borderWidth: 1, padding: 10,
                borderRadius: 12}} >
        <View style={styles.head}>
          <View style={{ width: "85%"}}>
          <Text style={{fontSize: 18, color: color}}>{item?.name.toUpperCase()}</Text>
            {/* <Time date={item?.created_at}/> */}
          </View>

        <FontAwesome5  name="chevron-right" size={20} color={color}  />
        </View>  
      </View>
        </TouchableOpacity>
            )
          }
        })
        
      )}
      </View>
    </View>
     
    </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  btnImg:  {
    width: 30,
    height: 30,
  },
  icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    justifyContent:'center',
    width : 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1
  },
  contentDesc: {
    fontSize: 15,
    color: 'black',
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 40
  },
  content: {
    marginTop: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12
  },
  container: {
    flex: 1,
    backgroundColor : '#fff',
    paddingVertical: 15
  },
  homeimage: {
    borderWidth: 1, 
    borderColor: "green",
    marginTop: 5,
    width : "100%",
    borderRadius: 12,
    height :200
  },
  logoimage: {
    width : 40,
    height :40
},
logofooter:{
  width : 30,
  height :30
},
header: {
  padding: 10,
},
    footer: {
      flex: 1,
      backgroundColor: '#e9f6fd',
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  icones:{
    flex: 1,
    flexDirection : 'row',
    marginLeft: 20,
  },
  i:{
backgroundColor : '#55a369',
marginLeft: 5,
height: 30,
width : 30,
lineHeight: 30,
textAlign: 'center',
borderRadius: 50,
  },
    signIn: {
      width: 200,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
     
      backgroundColor : '#fcb736',
      flexDirection: 'row',
      marginBottom : 20
  },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
  
});
