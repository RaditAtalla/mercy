import {Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/Colors';
import Style from '../styles/Style';
const width = Dimensions.get('window').width;

export default function MapText({top, left, text, textShadowColor, action}) {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: width / 3.8,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 15
      }}>
      <Text style={[Style.mapText, {textShadowColor: textShadowColor}]}>
        {text}
      </Text>
      <Image source={require('../assets/images/pin.png')} />
    </TouchableOpacity>
  );
}
