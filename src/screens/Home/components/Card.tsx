import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../../Theme';
import {normalize, FontStyle} from '../../../Theme/Fonts';
import Logo from '../../../assets/svg/logo_white.svg';
import VisaLogo from '../../../assets/svg/visa_logo.svg';
import UserProfile from '../../../interfaces/userProfile';

interface Props {
  showData: boolean;
  data: UserProfile;
}

const Card: FC<Props> = props => {
  const cardNumber = props.showData
    ? props.data.cardNumber
    : `•••• •••• •••• ${props.data.cardNumber?.substring(
        props.data.cardNumber.length - 4,
      )}`;

  const cvv = props.showData ? props.data.cvv : `***`;
  return (
    <View style={styles.container}>
      <View style={styles.logoHolder}>
        <Logo width={normalize(15)} height={normalize(15)} />
        <Text style={styles.txtAspire}>aspire</Text>
      </View>
      <Text style={styles.txtName}>{props.data.name}</Text>
      <Text style={styles.txtCardNo}>{cardNumber}</Text>
      <View style={styles.bottomLine}>
        <Text style={styles.txtExpiry}>Thru: {props.data.cardExpiry}</Text>
        <Text style={styles.txtCvv}>CVV: {cvv}</Text>
      </View>
      <View style={styles.visaLogoHolder}>
        <VisaLogo width={normalize(50)} height={normalize(15)} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: normalize(150),
    backgroundColor: Colors.secondary,
    borderRadius: normalize(10),
    padding: normalize(15),
  },
  logoHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  txtAspire: {
    ...FontStyle.small,
    color: Colors.white,
    marginLeft: normalize(5),
  },
  txtName: {
    ...FontStyle.largeBold,
    color: Colors.white,
    marginTop: normalize(5),
  },
  txtCardNo: {
    ...FontStyle.medium,
    color: Colors.white,
    marginTop: normalize(25),
  },
  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  txtExpiry: {
    ...FontStyle.small,
    color: Colors.white,
  },
  txtCvv: {
    ...FontStyle.small,
    color: Colors.white,
    marginLeft: normalize(20),
  },
  visaLogoHolder: {
    alignSelf: 'flex-end',
  },
});
