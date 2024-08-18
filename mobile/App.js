import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

// import Drawers from './src/navigations/Drawer';
import Routes from './src/navigations/Router';
import SplashScreen from 'react-native-splash-screen'

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Routes />;
}
