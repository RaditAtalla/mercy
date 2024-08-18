import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import colors from '../constants/Colors';

const { height, width } = Dimensions.get('window');

export default function SplashScreen(navigation, route) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height: height / 2.6,
            width: width / 2
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 25 }}>
        <View>
          <Image source={require('../assets/images/diskominfo.png')} />
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../assets/images/metromatika.png')} />
        </View>
      </View>
    </View>

  )
}
