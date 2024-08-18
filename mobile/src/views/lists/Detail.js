import React from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, Linking, TouchableOpacity } from 'react-native';
import Style from '../../styles/Style';
import Header from '../../components/Header';
import colors from '../../constants/Colors';

export default function Detail({ route, navigation }) {
  const { data } = route.params.data;
  return (
    <SafeAreaView style={Style.container}>
      <Header navigation={navigation} back={true} />
      <View style={{ flex: 1, padding: 15 }}>
        <View style={{ marginBottom: 15 }}>
          <Image
          source={{uri: route.params.data.photo ? route.params.data.photo : 'https://www.drberita.com/photo/berita/dir062016/9668_PNS-Pemko-Medan-Tipu-Warga-Pangkalan-Mansyur-Rp-150-Juta-Untuk-Masuk-Kerja.jpg'}}
            style={{ width: '100%', height: Dimensions.get('window').height / 3.5, borderRadius: 10 }}
            resizeMode={'cover'}
          />
        </View>

        <View style={{ backgroundColor: colors.light, padding: 15, borderRadius: 10 }}>
          <View style={{ marginBottom: 25 }}>
            <Text style={Style.listText1}>{route.params.data.name}</Text>
            <Text style={Style.listText3}>{route.params.section}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
            <View style={{ width: '20%' }}><Image source={require('../../assets/images/phone.png')} /></View>
            <View style={{ width: '80%' }}><Text style={Style.listText2}>{route.params.data.phone ? route.params.data.phone : '-'}</Text></View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
            <View style={{ width: '20%' }}><Image source={require('../../assets/images/mail.png')} /></View>
            <View style={{ width: '80%' }}><Text style={Style.listText2}>{route.params.data.email ? route.params.data.email : '-'}</Text></View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
            <View style={{ width: '20%' }}><Image source={require('../../assets/images/web.png')} /></View>
            <View style={{ width: '80%' }}><Text style={Style.listText2}>{route.params.data.web ? route.params.data.web : '-'}</Text></View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
            <View style={{ width: '20%' }}><Image source={require('../../assets/images/clock.png')} /></View>
            <View style={{ width: '80%' }}><Text style={Style.listText2}>{route.params.data.operation ? route.params.data.operation : '-'}</Text></View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View style={{ width: '20%' }}><Image source={require('../../assets/images/pin_black.png')} /></View>
            <View style={{ width: '80%' }}><Text style={Style.listText2}>{route.params.data.address ? route.params.data.address : '-'}</Text></View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => Linking.openURL(route.params.data.gmap)}>
              <Image source={require('../../assets/images/gmap.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}