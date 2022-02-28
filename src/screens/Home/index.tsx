import React, {FC, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import CardMenuItem from '../../components/MenuItem';
import {RootState, useAppDispatch} from '../../config/configureStore';
import {getUserData, unsetSpendingLimit} from '../../redux/slices/userProfile';
import CardHolder from './components/CardHolder';
import HeaderSection from './components/Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import SpendingLimitIndicator from '../../components/SpendingLimitIndicator';
import homeMenus from '../../constants/HomeMenus';
import HomeMenu from '../../interfaces/homeMenu';

const HomeScreen: FC = () => {
  const data = useSelector((state: RootState) => state.userProfile);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const disableSpendLimit = () => {
    dispatch(unsetSpendingLimit(''));
  };

  const [menus, setMenus] = useState<HomeMenu[]>(homeMenus);

  useEffect(() => {
    const _menus = [...menus];
    _menus[1].switchOn = data?.spendingLimitActive;
    _menus[1].onSwitch = data?.spendingLimitActive
      ? () => disableSpendLimit()
      : () => navigation.navigate('SpendLimit');
    _menus[1].description = data?.spendingLimitActive
      ? `Your weekly spending limit is S$ ${data?.spendingLimit?.toLocaleString()}`
      : 'You haven’t set any spending limit on card';
    _menus[2].switchOn = data?.cardFrozen;
    setMenus([..._menus]);
  }, [data]);

  useEffect(() => {
    console.log(menus);
  }, [menus]);

  return (
    <View style={styles.container}>
      <HeaderSection balance={data?.availableBalance} loading={data?.loading} />
      <View style={styles.bgContainer}>
        <CardHolder data={data} />
        <View style={styles.listContainer}>
          <ScrollView style={styles.scrollContainer} bounces={false}>
            {data?.spendingLimitActive && (
              <SpendingLimitIndicator limit={data?.spendingLimit || 0} />
            )}
            {menus?.map((menu, index) => (
              <CardMenuItem {...menu} loading={data?.loading} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
