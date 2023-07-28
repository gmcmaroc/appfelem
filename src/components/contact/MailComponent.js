import { 
    StyleSheet,
    Text,
    Linking,
    View, 
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import {Email} from '../constants/icons';


const MailComponent = ({ shouldRender }) => {

    const openGmail = () => {
      
      if (shouldRender.includes("/")) {
      const email = shouldRender; 
      const url = `mailto:${email}`;
      shouldRender = shouldRender.split('/')
      shouldRender = shouldRender.filter(function(item) {
        return item !== '/'
        })
        Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            return Linking.openURL(url);
          } else {
            throw new Error('Gmail is not installed');
          }
        })
        .catch((error) => {
          console.error("Échec de l'ouverture de Gmail :", error);
          Alert.alert('Error', "Échec de l'ouverture de Gmail. Veuillez vous assurer qu'il est installé sur votre appareil.");
        });
    }
  
    if (shouldRender.includes(" ")) {
      const email = shouldRender; 
      const url = `mailto:${email}`;
      shouldRender = shouldRender.split(' ')
      shouldRender = shouldRender.filter(function(item) {
        return item !== ' '
        })
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              throw new Error('Gmail is not installed');
            }
          })
          .catch((error) => {
            console.error("Échec de l'ouverture de Gmail :", error);
            Alert.alert('Error', "Échec de l'ouverture de Gmail. Veuillez vous assurer qu'il est installé sur votre appareil.");
          });
    } else {
      const email = shouldRender; 
      const url = `mailto:${email}`;
      Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              throw new Error('Gmail is not installed');
            }
          })
          .catch((error) => {
            console.error("Échec de l'ouverture de Gmail :", error);
            Alert.alert('Error', "Échec de l'ouverture de Gmail. Veuillez vous assurer qu'il est installé sur votre appareil.");
          });
    }
    };
  
    if (shouldRender) {
  
      return (
        <View style={styles.home}>
        <Text style={{fontSize: 16, maxWidth: "80%"}}>{shouldRender}</Text>
        <TouchableOpacity style={{ padding: 5}} onPress={() => openGmail(shouldRender)}>
        <Image
              source={Email}
              resizeMode='cover'
              style={styles.btnImg}
            />
        </TouchableOpacity>
         </View>
      );
    } 
      return null
  
  };
  export default MailComponent
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