
import { Dimensions, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {icons, images} from '../../constants'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
export default function Footer  ({ home, search, group, mail, display}) {
    const screenDimensions = Dimensions.get('screen');
    const navigation = useNavigation();
    return (
      <View style={{
        display: display,
        position: "absolute",
        left: 0,
        flexDirection: "row",
        justifyContent: "center",
        width: screenDimensions.width,
        bottom: 0,
        zIndex: 2}}
        >
        <StatusBar style="auto" />
        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={home} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1}
          style={styles.icon1}
          onPress={() => navigation.navigate("Search")}
        >
          <Image source={search} style={styles.logofooter}/>
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
          <Image source={mail} style={styles.logofooter}/>
        </TouchableOpacity>
      </View>
    )
}



const styles = StyleSheet.create({
    icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 10,
    justifyContent:'center',
    width : 100,
    },
  logofooter:{
    width : 28,
    height : 28
  },
  
    
  });