// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as RNLocalize from 'react-native-localize';
// import en from './locales/en';
// import id from './locales/id';

// const locales = RNLocalize.getLocales();
// const deviceLanguage = locales[0].languageCode;

// let lang = {};

// // load the selected language from AsyncStorage or use the device language
// AsyncStorage.getItem('selectedLanguageCode').then((selectedLanguageCode) => {
//   if (selectedLanguageCode) {
//     lang = selectedLanguageCode === 'en' ? en : id;
//   } else {
//     lang = deviceLanguage === 'en' ? en : id;
//   }
// });

// // create a mock object that implements addListener and removeListeners
// const localizeEventEmitter = {
//   addListener: () => {},
//   removeListeners: () => {},
// };

// // define a function to update the selected language in AsyncStorage and update the displayed strings
// const setLanguage = async (languageCode) => {
//   await AsyncStorage.setItem('selectedLanguageCode', languageCode).then(() => {
//     lang = languageCode === 'en' ? en : id;
//     localizeEventEmitter.emit('localizationDidChange');
//   });
// };

// // export the available languages and the selected language code
// export const availableLanguages = [
//   { code: 'en', name: 'English' },
//   { code: 'id', name: 'Bahasa Indonesia' },
// ];

// export const selectedLanguageCode = AsyncStorage.getItem('selectedLanguageCode') ?? deviceLanguage;

// // export the language strings and the setLanguage function
// export { lang, setLanguage };


import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import id from './locales/id';

const locales = RNLocalize.getLocales();
const deviceLanguage = locales[0].languageCode;

let lang = {};

// Use AsyncStorage to get the selected language code from storage, or default to the device language
AsyncStorage.getItem('selectedLanguageCode').then((selectedLanguageCode) => {
  if (!selectedLanguageCode) {
    // If there is no selected language code in AsyncStorage, set the device language as the default
    AsyncStorage.setItem('selectedLanguageCode', deviceLanguage);
    selectedLanguageCode = deviceLanguage;
  }
  // Set lang to the corresponding language object based on the selected language code
  lang = selectedLanguageCode === 'en' ? en : id;
});

// Create a mock object that implements addListener and removeListeners
const localizeEventEmitter = {
  addListener: () => {},
  removeListeners: () => {},
};

// Define a function to update the selected language in AsyncStorage and update the displayed strings
const setLanguage = async (languageCode) => {
  await AsyncStorage.setItem('selectedLanguageCode', languageCode).then(() => {
    lang = languageCode === 'en' ? en : id;
    localizeEventEmitter.emit('localizationDidChange');
  });
};

// Export the available languages and the selected language code
export const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Bahasa Indonesia' },
];
export const selectedLanguageCode = AsyncStorage.getItem('selectedLanguageCode') ?? deviceLanguage;

// Export the language strings and the setLanguage function
export { lang, setLanguage };
