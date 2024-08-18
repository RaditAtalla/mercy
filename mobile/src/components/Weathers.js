import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../constants/Colors';
import axios from 'axios';
import Style from '../styles/Style';

import * as RNLocalize from 'react-native-localize';
import {lang} from '../../i18n';

const locales = RNLocalize.getLocales();
const deviceLanguage = locales[0].languageCode;

export default function Weathers() {
  const [weather, setWeather] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  const getWeatherData = async () => {
    l = "";
    if (deviceLanguage === "en") {
      l = "en-US";
    } else {
      lang = "id-ID";
    }

    const link =
      `https://dataservice.accuweather.com/currentconditions/v1/211298?apikey=mm7ZGn3M6Mb4MXXsHc56WJ73m7WAvGGF&language=${l}`;
    const res = await axios.get(link);

    setWeather(res.data[0]);

    const ico = res.data[0].WeatherIcon.toString();
    const icoLength = ico.length;

    if (icoLength < 2) {
      setWeatherIcon(`0${res.data[0].WeatherIcon}`);
    } else {
      setWeatherIcon(res.data[0].WeatherIcon);
    }
  };

  const top = 30;
  const [position, setPosition] = useState({
    left: 0,
  });

  const movingPlane = () => {
    let i = 0;
    setInterval(() => {
      if (i < Dimensions.get('window').height) {
        setPosition({
          left: i++,
        });
      } else {
        i = 0;
      }
    }, 50);
  };

  useEffect(() => {
    movingPlane();
    getWeatherData();
    //const interval = setInterval(getWeatherData, 60000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: top,
        left: position.left,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          padding: 10,
          borderRadius: 10,
          marginRight: 10,
        }}>
        <Text style={[Style.listText1, {color: colors.light}]}>
          {lang["Cuaca Kota Medan"]}
        </Text>
        <Text style={[Style.listText3, {color: colors.light}]}>
          {weather.WeatherText}
        </Text>
        {weather ? (
          <Text style={[Style.listText3, {color: colors.light}]}>
            {weather.Temperature.Metric.Value}°{weather.Temperature.Metric.Unit}
          </Text>
        ) : (
          <Text>-</Text>
        )}
      </View>
      <Image
        source={{
          uri: `https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`,
        }}
        style={{width: 80, height: 80}}
      />
    </View>
  );
}
