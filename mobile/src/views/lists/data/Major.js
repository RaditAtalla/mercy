import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, View, TouchableOpacity} from 'react-native';
import Place from '../Place';
import axios from '../../../apis/Axios';
import Style from '../../../styles/Style';
import colors from '../../../constants/Colors';

import About from '../../../components/major/About';
import History from '../../../components/major/History';
import Profile1 from '../../../components/major/Profile1';
import Profile2 from '../../../components/major/Profile2';
import Gallery from '../../../components/major/Gallery';
import lang from '../../../../i18n';

export default function Major({navigation}) {
  const aboutIcon = axios.defaults.baseURL + '/images/icons/info.png';
  const historyIcon = axios.defaults.baseURL + '/images/icons/history.png';
  const majorIcon = axios.defaults.baseURL + '/images/icons/major.png';
  const coMajorIcon = axios.defaults.baseURL + '/images/icons/comajor.png';
  const cultureIcon = axios.defaults.baseURL + '/images/icons/culture.png';
  const galleryIcon =
    axios.defaults.baseURL + '/images/icons/photo-gallery.png';
  const [data, setData] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [showData, setShowData] = useState('about');

  const fetchData = async () => {
    await axios.get('/api/data/major').then(result => {
      if (result.data.data) {
        setData(result.data.data);
      }
    });
  };

  const fetchGallery = async () => {
    const res = await axios.get('/api/gallery');
    setGallery(res.data.data);
  }

  useEffect(() => {
    fetchData();
    fetchGallery();
  }, []);

  return (
    <View style={Style.container}>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 10,
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          backgroundColor: colors.light,
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <TouchableOpacity
          onPress={() => setShowData('about')}
          style={{
            width: '20%',
            alignItems: 'center',
            padding: 5,
            borderBottomWidth: showData === 'about' ? 5 : 0,
            borderColor: colors.primary,
            borderBottomLeftRadius: 10,
          }}>
          <Image
            source={{uri: aboutIcon}}
            resizeMode={'contain'}
            style={{width: '100%', minHeight: 50}}
          />
          <Text
            style={[
              Style.listText2,
              {
                textAlign: 'center',
              },
            ]}>
            {lang["Tentang"]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowData('history')}
          style={{
            width: '20%',
            alignItems: 'center',
            padding: 5,
            borderBottomWidth: showData === 'history' ? 5 : 0,
            borderColor: colors.primary,
          }}>
          <Image
            source={{uri: historyIcon}}
            resizeMode={'contain'}
            style={{width: '100%', minHeight: 50}}
          />
          <Text style={[Style.listText2, {textAlign: 'center'}]}>{lang['Sejarah']}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowData('profile1')}
          style={{
            width: '20%',
            alignItems: 'center',
            padding: 5,
            borderBottomWidth: showData === 'profile1' ? 5 : 0,
            borderColor: colors.primary,
          }}>
          <Image
            source={{uri: majorIcon}}
            resizeMode={'contain'}
            style={{width: '100%', minHeight: 50}}
          />
          <Text style={[Style.listText2, {textAlign: 'center'}]}>{lang["Walikota"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowData('profile2')}
          style={{
            width: '20%',
            alignItems: 'center',
            padding: 5,
            borderBottomWidth: showData === 'profile2' ? 5 : 0,
            borderColor: colors.primary,
          }}>
          <Image
            source={{uri: coMajorIcon}}
            resizeMode={'contain'}
            style={{width: '100%', minHeight: 50}}
          />
          <Text style={[Style.listText2, {textAlign: 'center'}]}>{lang["Wakil"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowData('gallery')}
          style={{
            width: '20%',
            alignItems: 'center',
            padding: 5,
            borderBottomWidth: showData === 'gallery' ? 5 : 0,
            borderColor: colors.primary,
            borderBottomRightRadius: 10,
          }}>
          <Image
            source={{uri: galleryIcon}}
            resizeMode={'contain'}
            style={{width: '100%', minHeight: 50}}
          />
          <Text style={[Style.listText2, {textAlign: 'center'}]}>{lang["Galeri"]}</Text>
        </TouchableOpacity>
      </View>
      {showData === 'about' ? (
        <About data={data.about} />
      ) : showData === 'history' ? (
        <History data={data.history} />
      ) : showData === 'profile1' ? (
        <Profile1 data={data.major} />
      ) : showData === 'profile2' ? (
        <Profile2 data={data.comajor} />
      ) : showData === 'gallery' ? (
        <Gallery data={gallery} />
      ) : null}
    </View>
  );
}
