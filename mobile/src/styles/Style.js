import { StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base,
  },
  mapText: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  },
  textHeader: {
    fontSize: 16,
    color: colors.light,
    fontWeight: '600',
  },

  listTitle: {
    fontSize: Dimensions.get('window').height / 40,
    fontWeight: '700',
    color: '#000',
  },

  listText1: {
    fontSize: Dimensions.get('window').height / 45,
    fontWeight: '500',
    color: '#000',
  },

  listText2: {
    fontSize: Dimensions.get('window').height / 55,
    fontWeight: '500',
    color: '#000',
  },

  listText3: {
    fontSize: Dimensions.get('window').height / 60,
    fontWeight: '500',
    color: '#000',
  },
});