import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import {agroforniture, services,  iriser, Export, viefilliere , BANNIERCARREFOUR, EXPORTATION, agrofournitures, servicesicon, viedelafiliere} from '../../components/constants/images'
import { homeGreen, loop, group, enveloppe, chevronRight, rightChevronWhite, check} from '../../components/constants/icons'
import useFetch from '../../hook/useFetch';
import Policy from '../common/policy/index'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function Home() {
  const screenDimensions = Dimensions.get('screen');
  const { data, isLoading, error } = useFetch("categories");
  const navigation = useNavigation();

  const date = (time) => {
    const newdate = new Date(time)
    const mydate = newdate.getUTCDate() + '-' + newdate.getMonth() + '-' + newdate.getFullYear()
    return mydate
  }

  
    const handleNavigatePress = (categorieID) => { 
      navigation.navigate('SubCategorie', {categorieID});
    };
  
    for(i of data) {
      if (i.id === 1) {
        i.logo = Export
      }
      if (i.id === 2) {
        i.logo = agroforniture
      }
      if (i.id === 3) {
        i.logo = services
      }
      if (i.id === 4) {
        i.logo = viefilliere
      }
    } 

  
  return (
      <View style={styles.container}>
  <ScrollView showsVerticalScrollIndicator={false}>  
        <StatusBar style="auto" />
         <View style={styles.header}>
        <Text style={{ color: '#05375a', fontSize: 23, fontWeight: 'bold' }}>Bienvenu sur <Text style={{color: '#55a369'}}>i-Felem</Text></Text>
        </View>
        <View style={{padding: 10}}>
        {isLoading ? (
            <ActivityIndicator size='large' color='#00ff00' />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
          data?.map((item, index) => {
            if (item.id){
              return (
                <View key={item.id}>
                <TouchableOpacity  activeOpacity={0.8} onPress={() => handleNavigatePress(item.id)}>
                <View style={{marginTop: 8, borderWidth: 2, borderColor: `${item.color}`, padding: 10,
                borderRadius: 12}} >
          <View style={styles.head}>
            <View>
              <Image source={item.logo} style={styles.logoimage} />
            </View>
            <View style={{ width: "70%"}}>
            <Text style={styles.contentTitle}>{item.name}</Text>
              <Text style={styles.contentDesc}>{date(item.created_at)} </Text>
            </View>
            
              <Image
            source={chevronRight}
            resizeMode='cover'
            style={styles.btnImg}
          />
          </View>  
          
        </View>
          </TouchableOpacity>
          {item.id === 2 && <View style={{marginTop: 8}}>
              <Image source={iriser} style={styles.homeimage} />
            </View>
          }
                </View>
              )
            }
          })
          
        )}
        </View>
        <View style={{marginBottom: 40, marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={BANNIERCARREFOUR} style={{width: screenDimensions.width - 10, height: 120}}/>
        </View>
  </ScrollView>
      <View style={{position: "absolute",
      left: 0,
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      bottom: 0,
      height: 55,
      zIndex: 2
      }}>
          <TouchableOpacity activeOpacity={1}
            style={styles.icon1}
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={homeGreen} style={styles.logofooter}/>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={1}
            style={styles.icon1}
            onPress={() => navigation.navigate("Search")}
          >
            <Image source={loop} style={styles.logofooter}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}
            style={styles.icon1}
            onPress={() => navigation.navigate("Partenaire")}
          >
            <Image source={group} style={styles.logofooter}/>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={1}
            style={styles.icon1}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Image source={enveloppe} style={styles.logofooter}/>
          </TouchableOpacity>
        </View>
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
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconscreen: {
    width : 25,
    height :25
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
  btnImg:{ 
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 20,
    color: 'black',
  },
  contentDesc: {
    fontSize: 15,
    color: 'gray',
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
  padding: 10
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
  {
    key: 's6',
    text: '',
    backgroundColor: '',
  },
];