import { 
    StyleSheet,
    Text,
    Linking,
    View, 
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { FontAwesome5} from "@expo/vector-icons";

const UrlLink = ({ shouldRender }) => {

    const openLink = (item) => {
      const http =  item.includes('https://')
      if(http) {
       const  url = item;
        Linking.openURL(url)
          .catch((error) => console.error('Failed to open link:', error)); 
      } else {
       const  url = 'https://'+item
        Linking.openURL(url)
          .catch((error) => console.error('Failed to open link:', error));
      }
      };

      
    if (shouldRender) {
  
      return (
        <View style={styles.home}>
        <Text style={{fontSize: 16, maxWidth: "80%"}}>{shouldRender}</Text>
        <TouchableOpacity style={{ padding: 5}} onPress={() => openLink(shouldRender)}>
        <FontAwesome5  name="globe" size={20} color="#56a56b" />
        </TouchableOpacity>
         </View>
      );
    } 
      return null
  
  };
  export default UrlLink
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "300",
      textAlign: "center",
      color: "#56a56b",
      marginTop: 18,
    },
    home : {
      marginTop: 10,
      paddingHorizontal: 15,
      borderRadius: 14,
      display: "flex",
      width: '100%',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between"
    },
    btnImg:  {
      width: 20,
      height: 20,
    },
    
})