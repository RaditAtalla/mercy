import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import colors from '../constants/Colors';
import Style from '../styles/Style';
import {lang} from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro({navigation, route}) {
  useEffect(() => {
    // AsyncStorage.clear()
    // setTimeout(() => {
    //   navigation.navigate('Draws');
    // }, 3000);
  });
  return (
    <SafeAreaView style={Style.container}>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 2.2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: Dimensions.get('window').height / 20,
            position: 'absolute',
            zIndex: 1,
            top: 10,
            left: 10,
            width: 300,
          }}>
          <View>
            <Image
              source={require('../assets/images/kominfo-icon.png')}
              style={{
                width: Dimensions.get('window').width / 10,
                height: '100%',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 5}}>
            <Text style={[Style.listText3, {color: colors.dark, fontWeight: '600'}]}>Dinas Komunikasi Dan Informatika</Text>
            <Text style={[Style.listText3, {color: colors.dark, fontWeight: '600'}]}>Kota Medan</Text>
          </View>
        </View>

        <Image
          source={require('../assets/images/major-office.jpg')}
          resizeMode={'cover'}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#425c5b',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.light,
            fontSize: Dimensions.get('window').height / 50,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          {lang['Selamat Datang']}
        </Text>
        <Text
          style={{
            color: colors.light,
            fontSize: Dimensions.get('window').height / 35,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Mercy Mobile
        </Text>
        <Image
          source={require('../assets/images/landing-logo.png')}
          resizeMode={'contain'}
          style={{
            width: '70%',
            height: '35%',
            marginVertical: Dimensions.get('window').height / 20,
          }}
        />
        <Text
          style={{
            color: colors.light,
            fontSize: Dimensions.get('window').height / 60,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Medan Smart City Mobile
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: colors.light,
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            width: '50%',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Draws')}>
          <Text
            style={{
              color: colors.dark,
              fontSize: Dimensions.get('window').height / 60,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Lets Go
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
