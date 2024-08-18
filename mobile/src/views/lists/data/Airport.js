import React from 'react';
import WebView from 'react-native-webview';

export default function Airport() {
  return <WebView source={{uri: 'https://kualanamu-airport.co.id/'}} />;
}
