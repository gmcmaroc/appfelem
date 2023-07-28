import { TouchableOpacity } from "react-native";
import styles from "./headerRight.style";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function HeaderRight ({ }) {

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Info')} >
      <Icon name="information-circle-outline" size={30} color="black" />
    </TouchableOpacity>
  );
};

