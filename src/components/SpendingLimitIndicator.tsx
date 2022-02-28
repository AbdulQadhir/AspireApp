import React, {FC} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Colors} from '../Theme';
import {FontStyle, normalize} from '../Theme/Fonts';

interface Props {
  limit: number;
}

const {width} = Dimensions.get('window');

const SpendingLimitIndicator: FC<Props> = props => {
  const used = 4500;
  const progressWidth = 100; //(used / props.limit) * (width - normalize(30));

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtTitle}>Debit card spending limit</Text>
        <Text style={styles.txtSpent}>
          ${used.toLocaleString()}
          <Text style={styles.txtLimit}>
            {'  '}${props.limit.toLocaleString()}
          </Text>
        </Text>
      </View>
      <View style={styles.bgIndicator}>
        <View style={[styles.progress, {width: progressWidth}]} />
      </View>
    </View>
  );
};

export default SpendingLimitIndicator;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtTitle: {
    ...FontStyle.small,
    color: Colors.blackText,
  },
  txtSpent: {
    ...FontStyle.smallBold,
    color: Colors.secondary,
  },
  txtLimit: {
    ...FontStyle.small,
    color: Colors.blackText,
  },
  bgIndicator: {
    height: normalize(10),
    backgroundColor: '#01D16740',
    borderRadius: normalize(5),
    marginVertical: normalize(10),
    overflow: 'hidden',
  },
  progress: {
    position: 'absolute',

    width: '30%',
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: normalize(10),
    borderTopWidth: normalize(10),
    borderRightColor: 'transparent',
    borderTopColor: Colors.secondary,
  },
});
