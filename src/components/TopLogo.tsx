import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import LogoSvg from '../assets/svg/logo.svg';
import {normalize} from '../Theme/Fonts';

const TopLogo: FC = () => {
  return (
    <View style={styles.container}>
      <LogoSvg width={normalize(25)} height={normalize(25)} />
    </View>
  );
};

export default TopLogo;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: normalize(20),
    top: normalize(10),
  },
});
