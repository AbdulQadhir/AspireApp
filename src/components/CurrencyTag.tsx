import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../Theme';
import {normalize, FontStyle} from '../Theme/Fonts';

const CurrencyTag: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>S$</Text>
    </View>
  );
};

export default CurrencyTag;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(10),
    height: normalize(18),
    backgroundColor: Colors.secondary,
    borderRadius: normalize(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FontStyle.miniBold,
    color: Colors.white,
  },
});
