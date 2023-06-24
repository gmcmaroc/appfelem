import { Image, TouchableOpacity } from "react-native";
import styles from "./headerRight.style";
import { Iicon } from "../../constants/icons";

export default function HeaderRight ({ iconUrl, dimension, handlePress }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={Iicon}
        resizeMode='cover'
        style={styles.btnImg}
      />
    </TouchableOpacity>
  );
};

