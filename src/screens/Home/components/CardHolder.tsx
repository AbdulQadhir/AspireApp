import React, {FC, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import UserProfile from '../../../interfaces/userProfile';
import Card from './Card';
import CardSwitcher from './CardSwitcher';

const {width} = Dimensions.get('window');

interface Props {
  data: UserProfile;
}

const CardHolder: FC<Props> = props => {
  const [showData, setShowData] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CardSwitcher
        showData={showData}
        onPress={() => setShowData(!showData)}
      />
      <Card data={props.data} showData={showData} />
    </View>
  );
};

export default CardHolder;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width - 50,
    height: 200,
    zIndex: 20,
    top: 0,
    left: 25,
  },
});
