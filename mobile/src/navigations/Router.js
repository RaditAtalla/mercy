import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../constants/Colors';

// import SplashScreen from '../views/SplashScreen';
import Intro from '../views/Intro';
import Home from '../views/homes/Home';
import Lists from '../views/lists/Lists';
import Detail from '../views/lists/Detail';
import WebViews from '../components/WebViews';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  const Draws = () => {
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
    <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Draws" component={Draws} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name='WebViews' component={WebViews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
