import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import HeaderSection from './components/Header';
import styles from './styles';
import Speedometer from '../../assets/svg/speedometer.svg';
import {normalize} from '../../Theme/Fonts';
import CurrencyTag from '../../components/CurrencyTag';
import AmountSelectorItem from '../../components/AmountSelectorItem';
import Button from '../../components/Button';
import {useAppDispatch} from '../../config/configureStore';
import {setSpendingLimit} from '../../redux/slices/userProfile';
import {useNavigation} from '@react-navigation/native';

const SpendLimitScreen: FC = () => {
  const choices = [5000, 10000, 20000];
  const [selectedLimit, setSelectedLimit] = useState<number | undefined>();

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const setLimit = () => {
    dispatch(setSpendingLimit(selectedLimit));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderSection />
      <View style={styles.contentContainer}>
        <View style={styles.title}>
          <Speedometer width={normalize(15)} height={normalize(15)} />
          <Text style={styles.txtTitle}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.amtHolder}>
          <CurrencyTag />
          <Text style={styles.txtAmount} testID="amtDisplay">
            {selectedLimit?.toLocaleString()}
          </Text>
        </View>
        <Text style={styles.txtNote}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        <View style={styles.amtSelector}>
          {choices.map(choice => (
            <AmountSelectorItem
              amount={choice}
              onPress={(val: number) => setSelectedLimit(val)}
              key={choice}
            />
          ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={'Save'}
          onPress={() => setLimit()}
          disabled={selectedLimit == undefined}
        />
      </View>
    </View>
  );
};

export default SpendLimitScreen;
