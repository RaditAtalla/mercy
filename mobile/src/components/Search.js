import {
  View,
  Text,
  Modal,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/Colors';
import axios from '../apis/Axios';
import Style from '../styles/Style';

export default function Search({navigation, modalVisible, close}) {
  const imgSource = axios.defaults.baseURL;
  const [searchResult, setSearchResult] = useState('');

  const searchData = async val => {
    if (val.length > 0) {
      const res = await axios.get('/api/data/search/' + val);
      setSearchResult(res.data.result);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              marginHorizontal: 25,
              marginBottom: 5,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => close()}>
              <Image
                source={require('../assets/images/close.png')}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.light,
              marginHorizontal: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: colors.border,
              padding: 15,
              height: Dimensions.get('window').height / 2.5,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                  borderColor: colors.border,
                  alignItems: 'center',
                }}>
                <View style={{width: '10%'}}>
                  <Image source={require('../assets/images/loupe.png')} />
                </View>
                <View style={{width: '90%'}}>
                  <TextInput
                    placeholder="Search..."
                    style={{paddingVertical: 10, paddingHorizontal: 5}}
                    onChangeText={text => searchData(text)}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 20, flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{
                  width: '100%',
                }}
                data={searchResult}
                renderItem={(item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        {
                          navigation.navigate('Detail', {data: item.item})
                          close();
                          searchData('')
                        }
                      }
                      style={{
                        flexDirection: 'row',
                        padding: 10,
                        alignItems: 'center',
                        flex: 1,
                        width: '100%',
                        backgroundColor: colors.light,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: colors.border,
                        marginBottom: 10,
                      }}>
                      <View style={{width: '20%'}}>
                        <Image
                          source={{uri: item.item.photo}}
                          style={{
                            width: '100%',
                            height: Dimensions.get('window').height / 20,
                          }}
                        />
                      </View>
                      <View style={{width: '80%', paddingLeft: 5}}>
                        <Text
                          numberOfLines={1}
                          style={[Style.listText2, {textAlign: 'left'}]}>
                          {item.item.name}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={[Style.listText2, {textAlign: 'left'}]}>
                          {item.item.address}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
