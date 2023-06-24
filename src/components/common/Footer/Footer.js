
import { Dimensions, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {icons, images} from '../../constants'


export default function Footer  ({navigation, home, search, group, mail}) {
    const screenDimensions = Dimensions.get('screen');
    return (
        <View style={{position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: screenDimensions.width,
    bottom: 0,
    height: 55,}}
    >
        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={home} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Food")}
        >
          <Image source={search} style={styles.logofooter}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Product")}
        >
          <Image source={group} style={styles.logofooter}/>
        </TouchableOpacity>

        <TouchableOpacity
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
      padding : 12,
      // borderRadius:10,
      // marginLeft : 5,
      justifyContent:'center',
      width : 100,
      // borderWidth: .4,
      // borderColor: "#56a56b",
    },
  logofooter:{
    width : 30,
    height :30
  },
  
    
  });