import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Style from '../styles/Style';
import colors from '../constants/Colors';
import axios from '../apis/Axios';

export default function GridCard({navigation, title, data, hColor}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          top: -15,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}>
        <Text
          style={[
            Style.listText3,
            {
              backgroundColor: hColor,
              color: colors.light,
              padding: 5,
              borderRadius: 50,
              width: '35%',
              textAlign: 'center',
            },
          ]}>
          {title}
        </Text>
      </View>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        }}>
        {data.map((val, index) => {
          let sec = val.section.toLowerCase();
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Lists', {
                  section: val.section,
                  title: val.title,
                })
              }
              style={{
                width: '25%',
                height: Dimensions.get('window').height / 7,
                padding: 5,
              }}>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: colors.light,
                  flex: 1,
                  borderRadius: 5,
                  backgroundColor: colors.light,
                  elevation: 1,
                  padding: 1,
                  alignItems: 'center',
                }}>
                <View style={{height: '50%', width: '100%'}}>
                  <Image
                    source={{
                      uri: axios.defaults.baseURL + `/images/grid/${sec}.png`,
                    }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                  />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={[Style.listText3, {textAlign: 'center'}]}>
                    {val.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
