import {home, enveloppe, loop, groupGreen, chevronRight, rightChevronWhite } from '../constants/icons'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Clipboard,
  Dimensions,
 
} from "react-native";
import { FontAwesome5} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

export default PartenaireId = ({partenaires}) => {
  const screenDimensions = Dimensions.get('screen');
    const route = useRoute();
    const { partenaireId } = route.params;
    const [Partenaire, setPartenaire] = useState(null);
  
    const fetchPartenaireDetails = (partenaireId) => {

        const array = partenaires.dataPartenaire
        const selectedPartenaire = array.find((partenaire) => partenaire.id === partenaireId);

        setPartenaire(selectedPartenaire);
      };

      useState(() => {
        fetchPartenaireDetails(partenaireId);
      }, [partenaireId, partenaires]);

      const handleCopyText = (text) => {
        const textToCopy = text;

        Clipboard.setString(textToCopy);
    
        ToastAndroid.show('Texte copié dans le presse-papiers', ToastAndroid.SHORT);
      };

      if (!Partenaire) {
        return (
          <View>
            <Text style={{fontSize: 25}}>Loading...</Text>
          </View>
        );
      }
    return (
        <View style={styles.container}>
            <View style={{width: "100%", marginTop: 20, height: 250, paddingHorizontal: 5}}>
            <Image source={Partenaire.logo} style={{width: "100%", height: '100%'}}/>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={{fontWeight: 'bold' , fontSize: 20}}>{Partenaire.company_name}</Text>
                <Text style={{fontWeight: 'bold' , fontSize: 15, color: 'grey'}}>{Partenaire.adresse}</Text>
                <Text style={{fontWeight: 'bold' , fontSize: 14}}>derigent: {Partenaire.dirigent}</Text>
            </View>
            <View >
                <Text style={{fontWeight: 'bold' , fontSize: 14}} >a propos de nous</Text>
                <Text style={{fontWeight: 'bold' , fontSize: 14, color: 'grey'}}>{Partenaire.description} </Text>
            </View>
    <View style={{width: '100%', paddingRight: 10}}>

            <TouchableOpacity onPress={() => handleCopyText(Partenaire.email)}>
          <View style={styles.home}>

           <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
          <Text style={{color: "white", fontWeight: 'bold'}}>{Partenaire.email}</Text>
          </View>

          <FontAwesome5  name="envelope" size={20} color="white" />

           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCopyText(Partenaire.phone)}>
           <View style={styles.home}>
           <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
          <Text style={{color: "white", fontWeight: 'bold'}}>{Partenaire.phone} </Text>
          </View>
          <FontAwesome5  name="phone" size={20} color="white" />


           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(Partenaire.siteweb)}>
           <View style={styles.home}>

           <View style={{display: 'flex', flexDirection: 'column', textAlign:'left', width: '70%'}}>
          <Text style={{color: "white", fontWeight: 'bold'}}>{Partenaire.siteweb} </Text>
          </View>

          <FontAwesome5  name="globe" size={20} color="white" />

           </View>
            </TouchableOpacity>
            </View>

        </View>
    )
}

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
      backgroundColor: "#fff",
      paddingLeft: 15,
      marginTop: 15
      
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