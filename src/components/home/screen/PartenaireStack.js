import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ifelem} from '../../constants/icons';
import Partenaire from '../Partenaire';
import PartenaireId from '../PartenaireId';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function PartenaireStack() {
  const navigation = useNavigation();
    return (
        <Stack.Navigator
      initialRouteName="Partenaire"
      screenOptions={{
      }}>
        <Stack.Screen name="Partenaire" component={Partenaire} options = {{
          headerRight: () => (
            <View style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "flex-end",
              }}>
                <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
              <Image
              source={ifelem}
              resizeMode='cover'
              style={{width: 30,
                height: 30,}}
            />
                </TouchableOpacity>
            </View>
            ),
            headerTitle: "Partenaires"
          }} 
            />  
            <Stack.Screen name="PartenaireId" options = {{
              headerRight: () => (
              <View style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                source={ifelem}
                resizeMode='cover'
                style={{width: 30,
                  height: 30,}}
              />
                  </TouchableOpacity>
              </View>
              )
              , 
              headerTitle: ""
              }} > 
            {() => <PartenaireId  />}
            </Stack.Screen>
      </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    btnImg:  {
        width: 30,
        height: 30,
      },
})