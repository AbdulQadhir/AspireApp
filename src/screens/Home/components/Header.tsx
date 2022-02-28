import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import CurrencyTag from '../../../components/CurrencyTag';
import TopLogo from '../../../components/TopLogo';
import {Colors} from '../../../Theme';
import {FontStyle, normalize} from '../../../Theme/Fonts';

interface Props {
  balance?: number;
  loading?: boolean;
}

const HeaderSection: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TopLogo />
      <Text style={styles.txtHead}>Debit Card</Text>
      <Text style={styles.txtLabel}>Available Balance</Text>
      <View style={styles.balanceHolder}>
        <CurrencyTag />
        <Text style={styles.txtBalance}>{props.balance?.toLocaleString()}</Text>
      </View>
      {props.loading && (
        <View style={styles.loader}>
          <ActivityIndicator color={Colors.white} size={normalize(20)} />
        </View>
      )}
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    height: normalize(125),
    padding: normalize(15),
  },
  txtHead: {
    ...FontStyle.largeBold,
    color: Colors.white,
    marginVertical: normalize(10),
  },
  txtLabel: {
    ...FontStyle.small,
    color: Colors.white,
    marginTop: normalize(20),
  },
  balanceHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  txtBalance: {
    ...FontStyle.largeBold,
    color: Colors.white,
    marginLeft: normalize(5),
    marginTop: normalize(2),
  },
  loader: {
    position: 'absolute',
    top: normalize(80),
    right: normalize(25),
  },
});
