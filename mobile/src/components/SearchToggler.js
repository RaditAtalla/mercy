import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

export default function SearchToggler({navigation, mode, bottom, right}) {
  return (
    <TouchableOpacity
      onPress={() => mode()}
      style={{
        position: 'absolute',
        bottom: bottom,
        right: right,
        zIndex: 10,
        backgroundColor: 'rgba(65, 91, 90, 0.1)',
        width: Dimensions.get('window').width / 8,
        height: Dimensions.get('window').width / 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}>
      <Image
        source={require('../assets/images/landing-logo.png')}
        resizeMode={'contain'}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
  );
}
