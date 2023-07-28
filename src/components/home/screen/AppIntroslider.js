import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, Text, View, Image,Button, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Policy from '../../common/policy'
import { check, rightChevronWhite } from '../../constants/icons';
import { EXPORTATION, agrofournitures, servicesicon, viedelafiliere } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from "@expo/vector-icons";

const AppIntro = ({onDataReceived }) => {
  const screenDimensions = Dimensions.get('screen');
  const navigation = useNavigation();
  const [show, setshow] = useState(false)
      const renderItem = ({item , index}) => {
        if (item.key !== 's5' ) {
          return (
            <View style={{width: screenDimensions.width,maxHeight: screenDimensions.height, backgroundColor: item.backgroundColor, display: 'flex', flexDirection: 'column',
            alignItems: 'center', width: "100%", height: "100%"}} key={index}>
              <View style={{height: screenDimensions.height, margin: 'auto',}}>
              <Image key={index} source={item.image} style={{height: 200, width:280, marginTop: "40%"}}/>
              <Text style={{fontSize: 18, color: 'white', paddingVertical: 30, textAlign: 'center'}}>{item.text}</Text>
              </View>
            </View>
          );
        }
        else {
          return (
          <View style={{backgroundColor: item.backgroundColor}} key={index}>
              <Policy />
            </View>
          )
        }
      }

      const renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Image
        source={rightChevronWhite}
        resizeMode='cover'
        style={styles.iconscreen}
        />
          </View>
        );
      };
      
      const handleContactUsPress = () => {
        const newData = true;
        setshow(newData);
        onDataReceived(newData);
      };

      const renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() => handleContactUsPress()}>
          <View style={styles.buttonDone}>
            <FontAwesome5 name="check" size={25} color="white" />
          </View>
            </TouchableOpacity>
        );
      };

      return (
        <>
          <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        showSkipButton={true}
        onSkip={() => handleContactUsPress()}
        />
        </>
      )
}

export default AppIntro


const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonDone: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(22, 160, 133, .8)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',

    },
    iconscreen: {
      width : 25,
      height :25
    },
    iconcheck: {
      width : 25,
      height: 25
    }
    
  });

  const slides = [
    {
      key: 's1',
      text: 'EXPORTATION & TRANSFORMATION',
      image: EXPORTATION,
      backgroundColor: '#ff7f00',
    },
    {
      key: 's2',
      text: 'AGROFORNITURE',
      image: agrofournitures ,
      backgroundColor: '#0098cc',
    },
    {
      key: 's3',
      text: 'SERVICES',
      image: servicesicon ,
      backgroundColor: '#d867b3'
    },
    {
      key: 's4',
      text: 'VIE DE LA FILIERE F&L',
      image: viedelafiliere ,
      backgroundColor: '#9d72ce',
    },
    {
      key: 's5',
      text: <Policy />,
      backgroundColor: '#fff',
    },
  ];