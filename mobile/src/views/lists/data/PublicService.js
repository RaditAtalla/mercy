import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import Place from '../Place';
import axios from '../../../apis/Axios';
import Style from '../../../styles/Style';

import datas from '../../../assets/json/layananPublik';
import colors from '../../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function PublicService({navigation}) {
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null)

  const fetchData = async () => {
    await axios.get('/api/category/public-service').then(result => {
      if (result.data.data) {
        setData(result.data.data.data);
      }
    });
  };

  const publicData = () => {};

  useEffect(() => {
    setImg(axios.defaults.baseURL + `/images/img/public-service.jpg`);
    fetchData();
  }, []);

  return (
    <View style={Style.container}>
      <View style={{ marginBottom: 15 }}>
        <Image
          source={{ uri: img ? img : null }}
          style={{ width: '100%', height: Dimensions.get('window').height / 3.5, borderRadius: 10 }}
          resizeMode={'cover'}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebViews', {link: item.item.website})
              }
              style={{
                backgroundColor: colors.light,
                borderRadius: 10,
                marginBottom: 10,
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: '20%'}}>
                <Image
                  source={
                    item.item.photo !== '' ? {uri: item.item.photo} : null
                  }
                  style={{width: '100%', height: 60}}
                  resizeMode={'contain'}
                />
              </View>
              <View style={{width: '80%'}}>
                <Text>{item.item.name}</Text>
                {/* <Text>{item.item.deskripsi}</Text> */}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
