import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/Colors';
import Style from '../styles/Style';
import DrawerToggler from './DrawerToggler';
import {lang, setLanguage, availableLanguages, selectedLanguageCode} from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';
import en from '../../i18n';
import id from '../../i18n';

export default function Header({navigation, back, title, menu, mode}) {
  // const [currentLang, setCurrentLang] = useState(selectedLanguageCode);
  const [currentLang, setCurrentLang] = useState(RNLocalize.getLocales()[0].languageCode);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  // const [currentLang, setCurrentLang] = useState(selectedLanguageCode);

  const backButton = () => {
    if (back) {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginRight: 15}}>
          <Image source={require('../assets/images/back.png')} />
        </TouchableOpacity>
      );
    } else if (menu) {
      return (
        <DrawerToggler
          navigation={navigation}
          mode={mode}
          top={
            Platform.OS == 'ios' ? Dimensions.get('window').height / 30 : null
          }
        />
      );
    }
  };

  // const checkLang = async () => {
  //   const asd = await AsyncStorage.getItem('selectedLanguageCode');
  //   if (!asd) {
  //     const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
  //     await AsyncStorage.setItem('selectedLanguageCode', deviceLanguage);
  //     setCurrentLang(deviceLanguage);
  //     lang = deviceLanguage === 'en' ? en : id;
  //   } else {
  //     setCurrentLang(asd);
  //     lang = asd === 'en' ? en : id;
  //   }
  // };

  const checkLang = async () => {
    let selectedLanguageCode = await AsyncStorage.getItem('selectedLanguageCode');
    if (!selectedLanguageCode) {
      // Get device's language
      let deviceLanguage = Localization.locale.split('-')[1];
  
      // Set selectedLanguageCode to device's language
      selectedLanguageCode = deviceLanguage;
      await AsyncStorage.setItem('selectedLanguageCode', selectedLanguageCode);
  
      // Set language to device's language
      setLanguage(selectedLanguageCode);
    }
    setCurrentLang(selectedLanguageCode);
  };
  

  useEffect(() => {
    checkLang();
  }, []);
  

  return (
    <View
      style={{
        flexDirection: 'row',
        height: Dimensions.get('window').height / 10,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {backButton()}
          <Text style={Style.textHeader}>{title}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowLanguageModal(true)}
          style={{marginLeft: 10}}>
          <Text
            style={{
              color: 'white',
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              borderColor: '#FFF',
              fontWeight: 'bold',
            }}>
            {currentLang.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <Modal
          transparent
          visible={showLanguageModal}
          animationType="slide"
          onRequestClose={() => setShowLanguageModal(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View style={{backgroundColor: 'white', padding: 20, margin: 20}}>
              {availableLanguages.map(lang => (
                <TouchableOpacity
                  key={lang.code}
                  onPress={() => {
                    setLanguage(lang.code);
                    setShowLanguageModal(false);
                    Restart.restart();
                  }}>
                  <Text>{lang.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
