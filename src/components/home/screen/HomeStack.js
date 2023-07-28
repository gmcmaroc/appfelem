import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ifelem} from '../../constants/icons';
import Home from '../Home'
import HeaderRight from '../../common/headers/HeaderRight'
import SubCategorie from '../SubCategorie';
import Info from "../info"
import Companies from '../Companies';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
      }}>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                headerBackVisible:false,
                headerLeft: () =>  (
                  <Image source={ifelem} resizeMode='cover' style={{ width: 40, height: 40}} />
                ),
               headerRight: () => {
                return (
                  <HeaderRight />
                )
               },
               headerTitle: () => (
                <View style={{marginLeft: 10}} >
              <Text>i-FELEM</Text>
              <Text>App. Mobile de la filière F&L au Maroc</Text>
              </View>
              ),
              }}
          />

        <Stack.Screen name='SubCategorie'  component={SubCategorie} />

         <Stack.Screen name='Info' options = {{headerRight: () => (
        <Text style={{color: '#55a369'}}>A PROPOS DE FELEM</Text>), headerTitle: "" }} component={Info} />

        <Stack.Screen name='Companies' component={Companies} />


      </Stack.Navigator>
    )
} 