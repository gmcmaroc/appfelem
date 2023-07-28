import { 
    StyleSheet,
    Text,
    Linking,
    View, 
    TouchableOpacity,
     } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const PhoneComponent = ({ shouldRender }) => {
    const handleOpenPhoneDialer = async (phone) => {
      const phoneNumber = phone; 
      const phoneUrl = `tel:${phoneNumber}`;

      Linking.canOpenURL(phoneUrl).then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          alert("Numérotation téléphonique non prise en charge sur cet appareil.");
        }
      });
  
      // try {
      //   await Linking.openURL(phoneUrl);
      // } catch (error) {
      //   console.error("Échec de l'ouverture du numéroteur téléphonique :", error);
  
      // }
    };
  
    if (shouldRender) {
  
      return (
        <View style={styles.home}>
                      <Text style={{fontSize: 16 , maxWidth: "80%" }}>{shouldRender}</Text>
                      <TouchableOpacity style={{ padding: 5}} onPress={() => handleOpenPhoneDialer(shouldRender)}>
      
                      <FontAwesome5  name="phone" size={20} color="#55a369"  />
                      </TouchableOpacity>
              </View>
      );
    } 
      return null
  
  };
  export default PhoneComponent
  const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: "300",
        textAlign: "center",
        color: "#56a56b",
        marginTop: 18,
      },
      home : {
        marginTop: 8,
        paddingHorizontal: 15,
        borderRadius: 14,
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
      },
      
})