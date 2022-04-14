import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {
  abbreviationList,
  numberList,
  specialStrList,
  stringList,
} from '../../config/config';
import {getPixelX} from '../../util/getPixel';

type Iprops = {
  visible: boolean;
  maskCallback: Function;
  onchange: (val: string) => void;
  defaultVal?: string;
};

const VehiclePlateCom: React.FC<Iprops> = ({
  visible,
  maskCallback,
  onchange,
  defaultVal,
}) => {
  const [plateNo, setPlateNo] = useState<string>(defaultVal || '');
  const [nthStep, setNthStep] = useState<number>(defaultVal?.length ? 2 : 1);
  const navigation = useNavigation();

  useEffect(() => {
    if (!plateNo.length) {
      setNthStep(1);
      return;
    }
    if (plateNo.length === 1) {
      setNthStep(2);
    }
  }, [plateNo, nthStep]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={() => navigation.goBack()}
      hardwareAccelerated={true}
      statusBarTranslucent={true}>
      <Pressable style={styles.blank} onPress={() => maskCallback()} />
      <View style={styles.keyboardWrap}>
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => maskCallback()}>
          <Text>确认</Text>
        </TouchableOpacity>
        {nthStep === 1 ? (
          <View style={styles.keyboardContent1}>
            {abbreviationList.map((item: string, index: number) => (
              <TouchableOpacity
                onPress={() => {
                  setPlateNo(item);
                  onchange(item);
                }}
                style={
                  (index + 1) % 8 === 0
                    ? {
                        ...styles.itemBox,
                        marginRight: 0,
                        marginBottom:
                          index === numberList.length - 1 ? 0 : getPixelX(12),
                      }
                    : {...styles.itemBox}
                }
                key={item}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.keyboardContent2}>
            <View style={styles.numberWrap}>
              {numberList.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  disabled={plateNo.length < 2 || plateNo.length === 7}
                  onPress={() => {
                    setPlateNo(plateNo + item);
                    onchange(plateNo + item);
                  }}
                  style={{
                    ...styles.numberBox,
                    opacity:
                      plateNo.length < 2 || plateNo.length === 7 ? 0.4 : 1,
                    marginRight:
                      index === numberList.length - 1 ? 0 : getPixelX(5),
                  }}>
                  <Text style={styles.numberText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.stringWrap}>
              <View style={styles.row}>
                {stringList.oneRow.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setPlateNo(plateNo + item);
                      onchange(plateNo + item);
                    }}
                    disabled={
                      item === 'I' || item === 'O' || plateNo.length === 7
                    }
                    key={item}
                    style={{
                      ...styles.stringItem,
                      opacity:
                        item === 'I' || item === 'O' || plateNo.length === 7
                          ? 0.4
                          : 1,
                      marginRight:
                        index === numberList.length - 1 ? 0 : getPixelX(5),
                    }}>
                    <Text style={styles.stringText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.row}>
                {stringList.twoRow.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setPlateNo(plateNo + item);
                      onchange(plateNo + item);
                    }}
                    disabled={plateNo.length === 7}
                    key={item}
                    style={{
                      ...styles.stringItem,
                      opacity: plateNo.length === 7 ? 0.4 : 1,
                      marginRight:
                        index === numberList.length - 1 ? 0 : getPixelX(5),
                    }}>
                    <Text style={styles.stringText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.row}>
                {stringList.threeRow.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setPlateNo(plateNo + item);
                      onchange(plateNo + item);
                    }}
                    disabled={plateNo.length === 7}
                    key={item}
                    style={{
                      ...styles.stringItem,
                      opacity: plateNo.length === 7 ? 0.4 : 1,
                      marginRight:
                        index === numberList.length - 1 ? 0 : getPixelX(5),
                    }}>
                    <Text style={styles.stringText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  ...styles.row,
                  marginBottom: 0,
                }}>
                {specialStrList.map((item, index) => (
                  <TouchableOpacity
                    disabled={plateNo.length !== 6}
                    key={item}
                    onPress={() => {
                      setPlateNo(plateNo + item);
                      onchange(plateNo + item);
                    }}
                    style={{
                      ...styles.specialStrItem,
                      opacity: plateNo.length !== 6 ? 0.4 : 1,
                      marginRight:
                        index === numberList.length - 1 ? 0 : getPixelX(5),
                    }}>
                    <Text style={styles.stringText}>{item}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  style={styles.imgBox}
                  onPress={() => {
                    const newPlate = plateNo;
                    setPlateNo(newPlate.slice(0, newPlate.length - 1));
                    onchange(newPlate.slice(0, newPlate.length - 1));
                  }}>
                  <Image
                    style={styles.img}
                    source={require('../delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default VehiclePlateCom;
