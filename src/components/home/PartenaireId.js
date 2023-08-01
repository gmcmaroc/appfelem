import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  Linking,
  ScrollView,
  Platform,
  RefreshControl
 
} from "react-native";
import { FontAwesome5} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useRoute } from '@react-navigation/native';
import useFetch from '../../hook/useFetch';
import Loader from '../common/loader/Loader';
import {Maps} from '../constants/images';
// import MapScreen from "../common/Maps/MapScreen";


const PartenaireId = () => {
  const screenDimensions = Dimensions.get('screen');
    const route = useRoute();
    const { data, isLoading, error, refetch } = useFetch(`advertisers/${route.params.partenaireId}`)
      const  OpenGmail = (email) => {
        const url = `mailto:${email}`;
        Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            return Linking.openURL(url);
          } else {
            throw new Error('Gmail is not installed');
          }
        })
        .catch((error) => {
          console.error("Échec de l'ouverture de Gmail :", error);
          Alert.alert('Error', "Échec de l'ouverture de Gmail. Veuillez vous assurer qu'il est installé sur votre appareil.");
        });
      }

      const handleOpenPhoneDialer = async (phone) => {
            const phoneNumber = phone; 
            const phoneUrl = `tel:${phoneNumber}`;
            const phoneios = `telprompt:${phoneNumber}`;

            Linking.canOpenURL(phoneUrl).then((supported) => {
              if (supported) {
                if (Platform.OS === "android") {
                  Linking.openURL(phoneUrl);
                } else {
                  Linking.openURL(phoneios);
                }
              } else {
                alert("Numérotation téléphonique non prise en charge sur cet appareil.");
              }
            });
          };

      const openLink = (item) => {
        const http =  item.includes('https://')
        if(http) {
          const  url = item; 
           Linking.openURL(url)
             .catch((error) => console.error('Failed to open link:', error)); 
         } else {
          const  url = 'https://'+item
           Linking.openURL(url)
             .catch((error) => console.error('Failed to open link:', error));
         }
      };

      if (!data) {
        return (
          <View style={{backgroundColor: "white"}}>
            <Text style={{fontSize: 25}}>Loading...</Text>
          </View>
        );
      }

      if(isLoading) {
        return(
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenDimensions.height - 400}}>

          <Loader />
        </View>
        )
      } else {
        return(

          <>
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
            <View style={{
              width: "100%",
               height: 200,
                marginTop: 20,
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 15
                 }}>
                <Image source={{ uri: `https://app.carrefourdemanutention.com/public/advertisers/${data?.logo}`}} resizeMode="contain" style={{width: "60%", height: undefined, aspectRatio: 1}}/>
                </View>
                <View>
                    {/* {data?.latitude !== null ?
                   <MapScreen id={data?.id} latitude={data?.latitude} longitude={data?.longitude} companyname={data?.company_name} />
                   :(
                    null
                   )
                    } */}
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <Image source={Maps} resizeMode="contain" style={{width: "10%", height: undefined, aspectRatio: 1, marginLeft: 4}} />
                    </View>
                    <Text style={{fontWeight: 'bold' , fontSize: 15, color: '#696969', marginTop: 8}}>{data?.adresse}</Text>
                      
                    <Text style={{fontWeight: 'bold' , fontSize: 14,marginTop: 4}}>derigent: {data.dirigent}</Text>
                </View>
                <View >
                    <Text style={{fontWeight: 'bold' , fontSize: 14, marginTop: 4}} >a propos de nous</Text>
                    <Text style={{fontWeight: 'bold' , fontSize: 14, color: '#696969'}}>{data?.description} </Text>
                </View>
                <View style={{width: '100%', paddingRight: 10, paddingBottom:20, marginTop: 4}}>
                {data?.email !== null ? 
                <TouchableOpacity onPress={() => OpenGmail(data?.email)}>
              <View style={styles.home}>
    
               <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
              <Text style={{color: "white", fontWeight: 'bold'}}>{data?.email}</Text>
              </View>
    
              <FontAwesome5  name="envelope" size={20} color="white" />
    
               </View>
                </TouchableOpacity>
                : (
                  null
                ) }

                {data?.phone !== null ? 
                <TouchableOpacity onPress={() => handleOpenPhoneDialer(data?.phone)}>
               <View style={styles.home}>
               <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
              <Text style={{color: "white", fontWeight: 'bold'}}>{data?.phone} </Text>
              </View>
              <FontAwesome5  name="phone" size={20} color="white" />
    
    
               </View>
                </TouchableOpacity>
                :(
                  null
                )
                }

                {data?.siteweb !== null ? 
                <TouchableOpacity onPress={() => openLink(data?.siteweb)}>
               <View style={styles.home}>
    
               <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
              <Text style={{color: "white", fontWeight: 'bold'}}>{data?.siteweb} </Text>
              </View>
    
              <FontAwesome5  name="globe" size={20} color="white" />
    
               </View>
                </TouchableOpacity>
                :(
                 null
                )

              }
                </View>
                </ScrollView>
               
    
            </View>
          </>
        )
      }

}
export default PartenaireId
const styles = StyleSheet.create({
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
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingTop: 15

      
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
      backgroundColor: 'green'
    },
  
    title: {
      fontSize: 20,
      fontWeight: "300",
      textAlign: "center",
      color: "#56a56b",
      marginTop: 18,
    },
 
   
  });