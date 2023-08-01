import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl 
 
} from "react-native";
import Loader from '../common/loader/Loader';
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import useFetch from '../../hook/useFetch';
import Time from '../home/time/Time'
import { useNavigation } from '@react-navigation/native';
import NotConnected from '../common/Notconnected/NotConnected';



const Partenaire = () => {
  const screenDimensions = Dimensions.get('screen');
  const navigation = useNavigation();
  const handleNavigatePress = (partenaireId) => { 
    navigation.navigate('PartenaireId', {partenaireId});
  };
  const { data, isLoading, error, refetch } = useFetch(`advertisers`)

  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
       style={styles.info}
       refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refetch}
          colors={['#55a369']}
            progressBackgroundColor="#fff"
        />
      }
       >

      <View style={{width: screenDimensions.width, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 50}}>
      {isLoading ? (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>

        <Loader />
      </View>
        ) : error ? (
          <NotConnected data={refetch} />
        ) : (
          data?.map((item, index) => {
            if (item.logo) {
              return (
            <TouchableOpacity activeOpacity={0.8}
              onPress={() => handleNavigatePress(item?.id)} key={index}
            >
          <View style={styles.home} >

              <Image source={{ uri: `https://app.carrefourdemanutention.com/public/advertisers/${item?.logo}`}} resizeMode="contain" style={{width: 90, height: undefined, aspectRatio: 1 }}/>

    
            <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '60%'}}>
              <Text style={{color: "#55a369", fontWeight: 'bold', fontSize: 16}}>{item?.company_name}</Text>
            </View>
            <FontAwesome5  name="chevron-right" size={20} color="#55a369"  />
          </View>
              </TouchableOpacity>
              )
            }
          })
          )}
          </View>

     
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
   
  );
}
export default Partenaire
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  home : {
    marginTop: 8,
    padding: 10,
    borderRadius: 14,
    display: "flex",
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: '#55a369',
    borderWidth: 1,
    height: 95
  },

  title: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    color: "#56a56b",
    marginTop: 18,
  },
  info: {
    width: "100%",
    height: "100%",
    display: "flex"
   },
  icone: {
    position : 'absolute',
    top : '30%',
    right : '10%' ,
  },
});
