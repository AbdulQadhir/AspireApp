import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../Theme';
import {normalize, FontStyle} from '../Theme/Fonts';

interface Props {
  amount: number;
  onPress: Function;
}

const AmountSelectorItem: FC<Props> = props => {
  return (
    <TouchableOpacity
      testID="amtSelector"
      style={styles.container}
      onPress={() => props.onPress(props.amount)}>
      <Text style={styles.text}>S$ {props.amount.toLocaleString()}</Text>
    </TouchableOpacity>
  );
};

export default AmountSelectorItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
    height: normalize(30),
    backgroundColor: '#20D16725',
    borderRadius: normalize(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FontStyle.miniBold,
    color: Colors.secondary,
  },
});
