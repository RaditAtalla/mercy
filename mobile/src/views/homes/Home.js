import React, {useEffect, useState} from 'react';
import Maps from './Maps';
import Grids from './Grids';
import {Dimensions, SafeAreaView, Text, View} from 'react-native';
import Style from '../../styles/Style';
import TextTicker from 'react-native-text-ticker';
import {gempa} from '../../apis/collections';
import colors from '../../constants/Colors';
import SearchToggler from '../../components/SearchToggler';
import Search from '../../components/Search';

export default function Home({navigation}) {
  const [viewMode, setViewMode] = useState('map');
  const [tickGempa, setTickGempa] = useState('');
  const [tickTitle, setTickTitle] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const infoGempa = async () => {
    let g = '';
    const res = await gempa();
    res.forEach(element => {
      g =
        g +
        ' ' +
        element.Tanggal +
        ' ' +
        element.Jam +
        ' (' +
        element.Coordinates +
        '), ' +
        element.Magnitude +
        ' SR, ' +
        element.Wilayah +
        ' dengan kedalaman ' +
        element.Kedalaman +
        ' | ';
    });
    setTickGempa(tickGempa + g);
  };

  const tickMode = () => {
    setTickTitle('Gempa');
    infoGempa();
  };

  const mode = () => {
    if (viewMode === 'map') {
      return <Maps navigation={navigation} mode={() => setViewMode('grid')} />;
    } else {
      return <Grids navigation={navigation} mode={() => setViewMode('map')} />;
    }
  };

  useEffect(() => {
    tickMode();

    const interval = setInterval(tickMode, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <SafeAreaView style={Style.container}>
      {mode()}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '15%',
            backgroundColor: colors.primary,
            borderRadius: 10,
            padding: 5,
          }}>
          <Text
            style={{
              color: colors.light,
            }}>
            {tickTitle}
          </Text>
        </View>
        <View
          style={{
            width: '84%',
          }}>
          <TextTicker
            animationType="scroll"
            style={{fontSize: 16, color: "#000"}}
            // onMarqueeComplete={() => Alert.alert('complete')}
            duration={360000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={2000}>
            {/* {tickGempa} */}
            {tickTitle === 'Gempa' ? tickGempa : tickGempa}
          </TextTicker>
        </View>
      </View>
      <SearchToggler
        navigation={navigation}
        mode={() => setShowSearch(true)}
        bottom={Dimensions.get('window').height / 9}
        right={10}
      />
      <Search navigation={navigation} modalVisible={showSearch} close={() => setShowSearch(false)} />
    </SafeAreaView>
  );
}
