import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ExitConfirmationModal from './src/components/common/Exit/Exit';
import AppIntro from './src/components/home/screen/AppIntroslider';
import Search from "./src/components/home/Search";
import ContactUs from './src/components/home/ContactUs';
import HomeStack from './src/components/home/screen/HomeStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PartenaireStack from './src/components/home/screen/PartenaireStack';
import { loop, searchGreen, home, homeGreen, group, groupGreen, enveloppe, mailGreen} from './src/components/constants/icons'

function CustomTabBarButton({ accessibilityState, children, onPress }) {
  const isActive = accessibilityState?.selected;
  
  return (
    <TouchableOpacity activeOpacity={1}
    style={[styles.tabBarButton, isActive && styles.tabBarButtonActive]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
  );
}

const Tab = createBottomTabNavigator();

const  App = () => {
const [showRealApp, setshowRealApp] = useState(false)
const [searching, setsearching] = useState(false)


const handleSearch = (data) => {
  setsearching(data);
};
const handleShowData = (data) => {
  setshowRealApp(data);
};
  
  return (
    <>
    <NavigationContainer  >
    {showRealApp ? (
      <Tab.Navigator
      initialRouteName="AppIntro"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#55a369',
        tabBarStyle: searching ? styles.tabBarnone : styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "HomeStack") {
            iconName = focused ? homeGreen : home;

          } else if (rn === "PartenaireStack") {
            iconName = focused ?  groupGreen : group;

          } else if (rn === "Recherche") {
            iconName = focused ? searchGreen : loop;
          } else if (rn === "Contactez nous") {
            iconName = focused ? mailGreen : enveloppe;
          }
          return <Image source={iconName} style={{width : 26, height : 26}}/>
        },
      })}
      >
    <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Accueil',
          header: ()  => { return null },
        }}
      />

       <Tab.Screen name="Recherche" 
       options = {{
        tabBarVisible: !searching,
        tabBarLabel: 'Recherche',
          headerTitle: "Recherche"
        }} >
          {(props) => <Search recieveData={handleSearch} />}
          </Tab.Screen> 



        <Tab.Screen
        name="PartenaireStack"
        component={PartenaireStack}
        options={{
          tabBarLabel: 'Partenaires',
          header: ()  => { return null },
        }}
      />

      
      <Tab.Screen name='Contactez nous' component={ContactUs}
       options = {{
        tabBarLabel: "Contact",
        }} />
    </Tab.Navigator>
   ) 
   : ( 
  <AppIntro  onDataReceived={handleShowData} /> 
   ) 
    
 } 
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
  button: {
    flexDirection : 'row',
   justifyContent : 'center',
   alignItems : 'flex-start',
   backgroundColor: "blue",
   width: 350
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor : "#fff",
    alignItems : 'center',
    justifyContent:'center',
  },
  tabBarnone: {
    display: 'none',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarButtonActive: {
    borderTopColor: '#55a369',
    borderTopWidth: 1,
  },

});

