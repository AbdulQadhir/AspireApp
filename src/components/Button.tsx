import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../Theme';
import {normalize, FontStyle} from '../Theme/Fonts';

interface Props {
  title: String;
  onPress: Function;
  disabled: boolean;
}

const Button: FC<Props> = props => {
  return (
    <TouchableOpacity
      testID="btnSave"
      style={[styles.container, props.disabled && styles.disabled]}
      disabled={props.disabled}
      onPress={() => props.onPress()}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(10),
    height: normalize(35),
    backgroundColor: Colors.secondary,
    borderRadius: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  disabled: {
    backgroundColor: '#EEEEEE',
  },
  text: {
    ...FontStyle.smallBold,
    color: Colors.white,
  },
});
