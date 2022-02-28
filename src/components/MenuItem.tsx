import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../Theme';
import {normalize, FontStyle} from '../Theme/Fonts';
import SwitchComp from './SwitchComp';

interface Props {
  title: String;
  description: String;
  icon: React.ReactNode;
  hasSwitch?: Boolean;
  onSwitch?: Function;
  switchOn?: boolean;
  loading?: boolean;
}

const CardMenuItem: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconHolder}>{props.icon}</View>
      <View style={styles.middle}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styles.txtDescription}>{props.description}</Text>
      </View>
      {props.hasSwitch && (
        <SwitchComp onSwitch={props.onSwitch} on={props.switchOn || false} />
      )}
    </View>
  );
};

export default CardMenuItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
    flexDirection: 'row',
    paddingVertical: normalize(10),
  },
  txtTitle: {
    ...FontStyle.small,
    color: Colors.blackText,
  },
  txtDescription: {
    ...FontStyle.mini,
    color: Colors.greyText,
    marginTop: normalize(3),
  },
  iconHolder: {
    width: normalize(30),
  },
  middle: {
    flex: 1,
  },
});
