import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./headerLeft.style";
import { ifelem } from "../../constants/icons";

export default function HeaderLeft ({ iconUrl, dimension, handlePress }) {
  return (
    <View style={styles.displayflex}>
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={ifelem}
        resizeMode='cover'
        style={styles.btnImg}
      />
    </TouchableOpacity>
      <View style={styles.marginleft}>
          <Text>I-FELEM</Text>
          <Text>App Mobile de la filliere F & L</Text>
      </View>
    </View>
  );
};

