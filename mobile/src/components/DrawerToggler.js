import { Dimensions, Image, Text, TouchableOpacity, Platform } from "react-native";
import colors from "../constants/Colors";

export default function DrawerToggler({ navigation, mode, top }) {
  return (
    <TouchableOpacity
      onPress={() => mode()}
      style={{
        position: 'absolute',
        top: top,
        left: 10,
        zIndex: 10,
        backgroundColor: 'rgba(65, 91, 90, 0.4)',
        width: Dimensions.get('window').width / 10,
        height: Dimensions.get('window').width / 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      }}>
      <Image source={require('../assets/images/menu.png')} resizeMode={'contain'} />
    </TouchableOpacity>
  );
}