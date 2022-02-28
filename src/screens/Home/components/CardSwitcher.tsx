import React, {FC} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../Theme';
import {FontStyle, normalize} from '../../../Theme/Fonts';
import EyeIcon from '../../../assets/svg/eye.svg';
import EyeCrossIcon from '../../../assets/svg/eye_cross.svg';

interface Props {
  onPress: Function;
  showData: boolean;
}

const CardSwitcher: FC<Props> = props => {
  return (
    <TouchableOpacity
      testID="cardSwitcher"
      onPress={() => props.onPress()}
      style={styles.container}>
      {props.showData ? (
        <View style={styles.holder}>
          <EyeCrossIcon width={normalize(15)} height={normalize(15)} />
          <Text style={styles.text}>Hide card number</Text>
        </View>
      ) : (
        <View style={styles.holder}>
          <EyeIcon width={normalize(15)} height={normalize(15)} />
          <Text style={styles.text}>Show card number</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CardSwitcher;

const styles = StyleSheet.create({
  container: {
    height: normalize(35),
    width: normalize(150),
    marginBottom: -normalize(10),
    alignSelf: 'flex-end',
    backgroundColor: Colors.white,
    borderTopLeftRadius: normalize(5),
    borderTopRightRadius: normalize(5),
    justifyContent: 'flex-start',
  },
  holder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(25),
  },
  text: {
    ...FontStyle.miniBold,
    color: Colors.secondary,
    paddingHorizontal: normalize(3),
    marginTop: normalize(2),
  },
});
