import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./headerLeft.style";
import { ifelem } from "../../constants/icons";

export default function HeaderLeft () {
  return (
    <View style={styles.displayflex}>
    <View style={styles.btnContainer}>
      <Image
        source={ifelem}
        resizeMode='cover'
        style={styles.btnImg}
      />
    </View>
    </View>
  );
};

