import React from 'react';
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import colors from '../../constants/Colors';
import Style from '../../styles/Style';

export default function Schedule({ data, navigation }) {

  const flatListRender = (item) => {
    return (
      <View style={{ flexDirection: 'row', marginBottom: 5, backgroundColor: 'white', borderRadius: 10 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%', backgroundColor: colors.primary, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
          <Image source={require('../../assets/images/train.png')} />
        </View>
        <View style={{ width: '80%', justifyContent: 'center', padding: 10, }}>
          <Text style={Style.listText1}>Nama Kereta Api</Text>
          <Text style={Style.listText2}>MDN <Image source={require('../../assets/images/right-arrow.png')} /> BJI</Text>
          <Text style={Style.listText3}>Senin, 29 Apr 2020 - 07:00</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={Style.container}>
      <View style={{ marginBottom: 15 }}>
        <Image
          source={{ uri: 'https://blog.eigeradventure.com/wp-content/uploads/2022/08/haidan-mWpohLLWJg4-unsplash-1.jpg' }}
          style={{ width: '100%', height: Dimensions.get('window').height / 3.5, borderRadius: 10 }}
          resizeMode={'cover'}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={(item, index) => flatListRender(item.item)}
        ListHeaderComponent={<Text style={[Style.listTitle, { marginBottom: 10 }]}>Jadwal Kereta Api Hari Ini</Text>}
      />
    </View>
  );
}
