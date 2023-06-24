import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderLeft from './src/components/common/headers/HeaderLeft'
import HeaderRight from './src/components/common/headers/HeaderRight'
import {check, rightArrow, ifelem} from './src/components/constants/icons';
import Home from "./src/components/home/Home";
import AppIntro from './src/components/home/screen/AppIntroslider';
import Search from "./src/components/home/Search";
import ContactUs from './src/components/home/ContactUs';
import  Partenaire from "./src/components/home/Partenaire";
import PartenaireId from './src/components/home/PartenaireId';
import dataPartenaire from './src/components/constants/data';
import SubCategorie from './src/components/home/SubCategorie';
import Companies from './src/components/home/Companies';

const Stack = createNativeStackNavigator();

const  App = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="AppIntro">
      <Stack.Screen name='AppIntro' component={AppIntro} options={{headerShown: false}}/>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => {
            return (
              <HeaderLeft />
            )
           },
           headerRight: () => {
            return (
              <HeaderRight />
            )
           },
           headerTitle: ""
          }}
          
        />
        <Stack.Screen name='SubCategorie' options = {{headerRight: () => (
              <Image source={ifelem} resizeMode='cover' style={styles.btnImg} />), headerTitle: "précedent" }} component={SubCategorie} />
  
         <Stack.Screen name="Search" component={Search} options = {{headerRight: () => (
              <Image
              source={ifelem}
              resizeMode='cover'
              style={styles.btnImg}
            />
           
            ),
            headerTitle: "Recherche"
          }} /> 

          <Stack.Screen name='Companies' options = {{headerRight: () => (
              <Image source={ifelem} resizeMode='cover' style={styles.btnImg} />), headerTitle: "précédent" }} component={Companies} />


         <Stack.Screen name="Partenaire" component={Partenaire} options = {{headerRight: () => (
              <Image
              source={ifelem}
              resizeMode='cover'
              style={styles.btnImg}
            />
           
            ),
            headerTitle: "Partenaires"
          }} 
            />  
          <Stack.Screen name="PartenaireId" options = {{headerRight: () => (
              <Image source={ifelem} resizeMode='cover' style={styles.btnImg} />), headerTitle: "précedent" }} > 
            {(props) => <PartenaireId { ...props} partenaires={dataPartenaire} />}
            </Stack.Screen>
        <Stack.Screen name='ContactUs' component={ContactUs} options = {{headerRight: () => (
              <Image
              source={ifelem}
              resizeMode='cover'
              style={styles.btnImg}
            />
           
            ),
            headerTitle: "Contactez nous"
          }} />
      </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}



export default App;


const styles = StyleSheet.create({
  btnImg:  {
    width: 30,
    height: 30,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimage: {
    width : 40,
    height :40
},
iconscreen: {
  width : 25,
  height :25
},
  button: {
    flexDirection : 'row',
   justifyContent : 'center',
   alignItems : 'flex-start',
   backgroundColor: "blue",
   width: 350
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  slide:{
    width: "100%",
    backgroundColor: 'green',
    height: "100%"
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },

});

