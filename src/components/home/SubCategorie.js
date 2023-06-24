import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, Image,TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import {agroforniture, iriser, Export, BANNIERCARREFOUR} from '../../components/constants/images'
import { rightChevronWhite} from '../../components/constants/icons'
import useFetch from '../../hook/useFetch';
import {FontAwesome5} from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Time from './time/Time';

export default function SubCategorie() {
    const navigation = useNavigation();
    const route = useRoute();
    const { data, isLoading, error } = useFetch(`categories/${route.params.categorieID}`);
    const color = data.color

    const date = (time) => {
    const newdate = new Date(time)
    const mydate = newdate.getUTCDate() + '-' + newdate.getMonth() + '-' + newdate.getFullYear()
    return mydate
  }

  const handleNavigatePress = (categorieID) => { 
    navigation.navigate('Companies', {categorieID});
  };
  
  return (

    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>  
      <StatusBar style="auto" />
       <View style={styles.header}>
      <Text style={{ textAlign: "center", color: '#05375a', fontSize: 20, fontWeight: "300", }}>Categorie </Text>
      <Text style={{textAlign: "center" , fontSize: 23, fontWeight: 'bold', color: '#55a369'}}>{data.name}</Text>
      </View>
      <View style={{padding: 10}}>
      {isLoading ? (
          <ActivityIndicator size='large' color='#00ff00' />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
        data.subcategories?.map((item, index) => {
            return (
              <TouchableOpacity key={item.id} activeOpacity={0.8} onPress={() => handleNavigatePress(item.id)}>
              <View  style={{ height: 'auto', borderColor: color, marginTop: 8, borderWidth: 1, padding: 10,
                borderRadius: 12}} >
        <View style={styles.head}>
          <View style={{ width: "85%"}}>
          <Text style={{fontSize: 20, color: color}}>{item.name}</Text>
            <Time date={item.created_at}/>
          </View>

        <FontAwesome5  name="chevron-right" size={25} color={color}  />
        </View>  
      </View>
        </TouchableOpacity>
            )
        })
        
      )}
      </View>
     
    </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
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
  },
  content: {
    marginTop: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12
  },
  container: {
    flex: 1,
    backgroundColor : '#fff'
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
