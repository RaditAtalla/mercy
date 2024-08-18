import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import colors from '../../constants/Colors';
import Style from '../../styles/Style';

import lang from '../../../i18n'

export default function Gallery({data}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={(item, index) => {
          return (
            <View
              style={{
                padding: 10,
                backgroundColor: colors.light,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View>
                <Image
                  source={{
                    uri: item.item.image,
                  }}
                  style={{
                    width: '100%',
                    height: Dimensions.get('window').height / 4,
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text style={[Style.listText2, {color: colors.info}]}>
                  #{item.item.tag}
                </Text>
                <Text numberOfLines={2} style={Style.listText2}>
                  {item.item.caption}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      Style.listText2,
                      {color: colors.grey, marginTop: 10},
                    ]}>
                    {lang["Selengkapnya"]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
