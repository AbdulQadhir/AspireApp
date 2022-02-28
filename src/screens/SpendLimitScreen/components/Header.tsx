import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TopLogo from '../../../components/TopLogo';
import {Colors} from '../../../Theme';
import {FontStyle, normalize} from '../../../Theme/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const HeaderSection: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopLogo />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntIcon name="left" size={normalize(20)} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.txtHead}>Spending Limit</Text>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    height: normalize(100),
    padding: normalize(15),
  },
  txtHead: {
    ...FontStyle.largeBold,
    color: Colors.white,
    marginVertical: normalize(20),
  },
});
