import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Style from '../styles/Style';
import Header from './Header';

export default function WebViews({route, navigation}) {
  return (
    <SafeAreaView style={Style.container}>
      <Header navigation={navigation} back={true} />
      <View style={{flex: 1}}>
        <WebView source={{uri: route.params.link}} />
      </View>
    </SafeAreaView>
  );
}
