import React, { useEffect, useState } from "react";
import axios from '../../../apis/Axios';
import {WebView} from 'react-native-webview';

export default function Lapor({ navigation }) {

  return (
    <WebView source={{uri: 'https://www.lapor.go.id/'}} />
  );
}