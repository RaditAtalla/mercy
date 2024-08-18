import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import axios from '../../apis/Axios';
import Style from '../../styles/Style';

import lang from '../../../i18n'

export default function Profile1({data}) {
  const banner = axios.defaults.baseURL + '/images/img/major-1.jpg';

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: Dimensions.get('window').height / 3.5,
            marginBottom: 15,
            borderRadius: 10,
          }}>
          <Image
            source={{uri: banner}}
            resizeMode={'cover'}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </View>
        <Text style={[Style.listTitle, {marginBottom: 10}]}>
          {lang["Profil Walikota Medan"]}
        </Text>
        <Text style={Style.listText2}>
          {data}
        </Text>
      </ScrollView>
    </View>
  );
}
