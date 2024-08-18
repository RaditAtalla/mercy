import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import MapText from '../../components/MapText';
import DrawerToggler from '../../components/DrawerToggler';

import Plane from '../../components/Plane';
import Weathers from '../../components/Weathers';

import {
  lang,
} from '../../../i18n';

import mapImg from '../../assets/images/map.png';

export default function Maps({navigation, mode}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const mapWidth = width * 4.3;
  const mapHeight = height * 1.1;

  useEffect(() => {
    const image = Image.resolveAssetSource(
      require('../../assets/images/map.png'),
    );
    Image.prefetch(image.uri)
      .then(() => {
        setImageLoaded(true);
      })
      .catch(error => {
        console.log('Error prefetching image:', error);
      });
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SafeAreaView style={Style.container}>
      <DrawerToggler
        mode={mode}
        top={Platform.OS == 'ios' ? Dimensions.get('window').height / 30 : 10}
      />

      {/* <FlatList
        data={availableLanguages}
        keyExtractor={item => item.code}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setLanguage(item.code)}>
            <Text
              style={{
                color: selectedLanguageCode === item.code ? 'blue' : 'black',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      /> */}

      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width: mapWidth, height: mapHeight}}>
              <Image
                key={new Date().getTime()}
                source={mapImg}
                style={{width: '100%', height: '100%'}}
                resizeMode={'stretch'}
              />
              <MapText
                top={0}
                left={mapWidth / 24}
                text={lang['STASIUN KERETA']}
                textShadowColor={'red'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'KAI',
                    title: lang['STASIUN KERETA'],
                  })
                }
              />
              <MapText
                top={height / 5}
                left={mapWidth / mapWidth}
                text={lang['BANK / ATM']}
                textShadowColor={'yellow'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Bank',
                    title: lang['BANK / ATM'],
                  })
                }
              />
              <MapText
                top={height / 2.1}
                left={mapWidth / 50}
                text={lang['MALL']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Mall',
                    title: lang['MALL'],
                  })
                }
              />
              <MapText
                top={height / 1.35}
                left={mapWidth / 400}
                text={lang['SALON']}
                textShadowColor={'blue'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Salon',
                    title: lang['SALON'],
                  })
                }
              />
              <MapText
                top={height / 1.34}
                left={mapWidth / 15}
                text={lang['KLINIK']}
                textShadowColor={'purple'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Klinik',
                    title: lang['KLINIK'],
                  })
                }
              />
              <MapText
                top={height / 1.13}
                left={mapWidth / 13}
                text={lang['LOKET PELAYANAN']}
                textShadowColor={'purple'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Loket Pelayanan',
                    title: lang['LOKET PELAYANAN'],
                  })
                }
              />
              <MapText
                top={height / 1.64}
                left={mapWidth / 6.4}
                text={lang['APOTEK']}
                textShadowColor={'red'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Apotek',
                    title: lang['APOTEK'],
                  })
                }
              />
              <MapText
                top={height / 1.9}
                left={mapWidth / 6.4}
                text={lang['KULINER']}
                textShadowColor={'yellow'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Kuliner',
                    title: lang['KULINER'],
                  })
                }
              />
              <MapText
                top={height / 10}
                left={mapWidth / 4.6}
                text={lang['HOTEL']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Hotel',
                    title: lang['HOTEL'],
                  })
                }
              />
              <MapText
                top={height / 2.6}
                left={mapWidth / 3.45}
                text={lang['DOKTER']}
                textShadowColor={'blue'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Dokter',
                    title: lang['DOKTER'],
                  })
                }
              />
              <MapText
                top={height / 3.3}
                left={mapWidth / 2.7}
                text={lang['INFORMASI']}
                textShadowColor={'purple'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Informasi',
                    title: lang['INFORMASI'],
                  })
                }
              />
              <MapText
                top={height / 1.5}
                left={mapWidth / 4.2}
                text={lang['KANTOR WALI KOTA']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Kantor Wali Kota',
                    title: lang['KANTOR WALI KOTA'],
                  })
                }
              />
              <MapText
                top={height / 2.2}
                left={mapWidth / 2.3}
                text={lang['WISATA DAN BUDAYA']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Wisata',
                    title: lang['WISATA DAN BUDAYA'],
                  })
                }
              />
              <MapText
                top={height / 30}
                left={mapWidth / 1.75}
                text={lang['SEKOLAH']}
                textShadowColor={'blue'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Sekolah',
                    title: lang['SEKOLAH'],
                  })
                }
              />
              <MapText
                top={height / 3.4}
                left={mapWidth / 1.74}
                text={lang['SPBU']}
                textShadowColor={'blue'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'SPBU',
                    title: lang['SPBU'],
                  })
                }
              />
              <MapText
                top={height / 3.5}
                left={mapWidth / 1.42}
                text={lang['OLAHRAGA']}
                textShadowColor={'purple'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Olahraga',
                    title: lang['OLAHRAGA'],
                  })
                }
              />
              <MapText
                top={height / 9}
                left={mapWidth / 1.25}
                text={lang['TERMINAL']}
                textShadowColor={'red'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Terminal',
                    title: lang['TERMINAL'],
                  })
                }
              />
              <MapText
                top={height / 40}
                left={mapWidth / 1.43}
                text={lang['TERMINAL']}
                textShadowColor={'yellow'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Pasar',
                    title: lang['TERMINAL'],
                  })
                }
              />
              <MapText
                top={height / 16}
                left={mapWidth / 1.12}
                text={lang['PELABUHAN']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Pelabuhan',
                    title: lang['PELABUHAN'],
                  })
                }
              />
              <MapText
                top={height / 4}
                left={mapWidth / 1.07}
                text={lang['INDUSTRI']}
                textShadowColor={'blue'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Industri',
                    title: lang['INDUSTRI'],
                  })
                }
              />
              <MapText
                top={height / 1.16}
                left={mapWidth / 2.14}
                text={lang['LAYANAN PUBLIK']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Layanan Publik',
                    title: lang['LAYANAN PUBLIK'],
                  })
                }
              />
              <MapText
                top={height / 1.26}
                left={mapWidth / 1.78}
                text={lang['LAPOR']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Lapor',
                    title: lang['LAPOR'],
                  })
                }
              />
              <MapText
                top={height / 1.55}
                left={mapWidth / 1.625}
                text={lang['POLISI']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Polisi',
                    title: lang['POLISI'],
                  })
                }
              />
              <MapText
                top={height / 1.72}
                left={mapWidth / 1.46}
                text={lang['RUMAH SAKIT']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Rumah Sakit',
                    title: lang['RUMAH SAKIT'],
                  })
                }
              />
              <MapText
                top={height / 2.8}
                left={mapWidth / 1.47}
                text={lang['LOWONGAN PEKERJAAN']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Lowongan Pekerjaan',
                    title: lang['LOWONGAN PEKERJAAN'],
                  })
                }
              />
              <MapText
                top={height / 1.7}
                left={mapWidth / 1.2}
                text={lang['TEMPAT IBADAH']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Tempat Ibadah',
                    title: lang['TEMPAT IBADAH'],
                  })
                }
              />
              <MapText
                top={height / 1.15}
                left={mapWidth / 1.4}
                text={lang['BANDARA']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Bandara',
                    title: lang['BANDARA'],
                  })
                }
              />
              <MapText
                top={height / 3}
                left={mapWidth / 1.145}
                text={lang['PUSKESMAS']}
                textShadowColor={'green'}
                action={() =>
                  navigation.navigate('Lists', {
                    section: 'Puskesmas',
                    title: lang['PUSKESMAS'],
                  })
                }
              />
              <View
                style={{
                  position: 'absolute',
                  top: height / 1.18,
                  left: mapWidth / 4.8,
                }}>
                <Image
                  source={require('../../assets/images/air_mancur.gif')}
                  resizeMode={'cover'}
                  style={{
                    width: Dimensions.get('window').width / 4,
                    height: Dimensions.get('window').width / 4,
                  }}
                />
              </View>
              <Plane />
              <Weathers />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
