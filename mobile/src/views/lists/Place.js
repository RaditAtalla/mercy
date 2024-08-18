import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import colors from '../../constants/Colors';
import Style from '../../styles/Style';
import axios from '../../apis/Axios'

export default function Place({ data, navigation, section }) {

  const [icon, setIcon] = useState(null);
  const [img, setImg] = useState(null)

  const setupImage = () => {
    let sec = section.toLowerCase()
    setIcon(axios.defaults.baseURL + `/images/icons/${sec}.png`);
    setImg(axios.defaults.baseURL + `/images/img/${sec}.jpg`);
  }

  useEffect(() => {
    setupImage();
  }, [])

  const flatListRender = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { data: item, section: section })}
        style={{ flexDirection: 'row', marginBottom: 5, backgroundColor: 'white', borderRadius: 10 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%', backgroundColor: colors.primary, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
          <Image source={{ uri: icon ? icon : null }} style={{ width: Dimensions.get('window').width / 20, height: Dimensions.get('window').width / 20 }} />
        </View>
        <View style={{ width: '80%', justifyContent: 'center', padding: 10, }}>
          <Text style={Style.listText2}>{item.name}</Text>
          <Text numberOfLines={1} style={[Style.listText3, { color: null }]}>{item.address}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[Style.listText3, { color: null }]}><Image source={require('../../assets/images/clock.png')} /> {item.operation}</Text>
            {/* <Text style={{ color: 'green' }}>Buka</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const noDataView = () => {
    return (
      <View style={{ alignItems: 'center', borderWidth: 1, paddingVertical: 30, borderRadius: 10, backgroundColor: colors.light, borderColor: colors.border }}>
        <View>
          <Image source={require('../../assets/images/empty_folder.png')} />
        </View>
        <Text style={Style.listText1}>Maaf</Text>
        <Text style={Style.listText2}>Data belum tersedia!</Text>
      </View>
    )
  }

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
        renderItem={(item, index) => flatListRender(item.item)}
        ListEmptyComponent={noDataView()}
      />
    </View>
  );
}
