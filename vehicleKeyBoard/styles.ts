import {StyleSheet} from 'react-native';
import {getPixelX, getPixelY} from '../../util/getPixel';

export default StyleSheet.create({
  blank: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
  },
  keyboardWrap: {
    height: getPixelY(260),
    width: '100%',
    backgroundColor: '#e8e9eb',
    shadowColor: '#ccc',
    paddingTop: getPixelY(2),
  },
  confirmBtn: {
    height: getPixelY(40),
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardContent1: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getPixelY(8),
    paddingHorizontal: getPixelY(5),
  },
  keyboardContent2: {
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: getPixelY(8),
    paddingHorizontal: getPixelX(5),
  },
  itemBox: {
    width: '10%',
    height: getPixelY(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: getPixelX(4),
    marginRight: getPixelX(8),
  },
  itemText: {
    color: '#333',
    fontSize: getPixelX(14),
  },
  numberWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getPixelY(8),
    width: '100%',
  },
  numberBox: {
    width: '8.5%',
    height: getPixelY(34),
    borderRadius: getPixelX(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  disNumbeBox: {
    opacity: 0.4,
  },
  box: {
    opacity: 1,
  },
  numberText: {
    color: '#333',
    fontSize: getPixelX(14),
  },
  stringWrap: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getPixelY(8),
    width: '100%',
  },
  stringItem: {
    width: '8.5%',
    height: getPixelY(34),
    borderRadius: getPixelX(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  stringText: {
    color: '#333',
    fontSize: getPixelX(14),
  },
  specialStrItem: {
    width: '14.4%',
    height: getPixelY(34),
    borderRadius: getPixelX(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight: getPixelX(5),
  },
  imgBox: {
    width: '20%',
    height: getPixelY(34),
    borderRadius: getPixelX(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
