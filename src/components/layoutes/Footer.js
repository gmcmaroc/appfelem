import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { icons } from '../constants'
import { AntDesign ,Entypo ,FontAwesome,FontAwesome5} from "@expo/vector-icons";

export default function Footer({ navigation }) {
  return (
  
      <View style={styles.button}>
     
      <TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Food')} ><Image source={icons.home} style={styles.logoimage}/>
</TouchableOpacity>
    
<TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Profile')} ><Image source={icons.loop} style={styles.logoimage}/>
</TouchableOpacity>
    
<TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Delivery')} ><Image source={icons.group} style={styles.logoimage}/>
</TouchableOpacity>
<TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Delivery')} ><Image source={icons.enveloppe} style={styles.logoimage}/>
</TouchableOpacity>
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "blue",
    padding:5,
    width: "100%",
    bottom: 0,
    height: 55,
  },
  icon1: {
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    // borderRadius:10,
    // marginLeft : 5,
    justifyContent:'center',
    width : 140,
    // borderWidth: .4,
    // borderColor: "#56a56b",
  },
  logoimage: {
    width : 30,
    height :30
},

});

