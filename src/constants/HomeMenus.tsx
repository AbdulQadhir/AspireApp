import React from 'react';
import TopUpIcon from '../assets/svg/menu_topup.svg';
import WeeklyIcon from '../assets/svg/menu_weekly.svg';
import FreezeIcon from '../assets/svg/menu_freeze.svg';
import DeactivateIcon from '../assets/svg/menu_deactivate.svg';
import GetNewIcon from '../assets/svg/menu_getnew.svg';
import {normalize} from '../Theme/Fonts';

const homeMenus = [
  {
    icon: <TopUpIcon width={normalize(23)} height={normalize(23)} />,
    title: 'Top-up account',
    description: 'Deposit money to your account to use with card',
  },
  {
    icon: <WeeklyIcon width={normalize(23)} height={normalize(23)} />,
    title: 'Weekly spending limit',
    description: 'You haven’t set any spending limit on card',
    hasSwitch: true,
    switchOn: false,
  },
  {
    icon: <FreezeIcon width={normalize(23)} height={normalize(23)} />,
    title: 'Freeze card',
    description: 'Your debit card is currently active',
    hasSwitch: true,
    switchOn: true,
  },
  {
    icon: <GetNewIcon width={normalize(23)} height={normalize(23)} />,
    title: 'Get a new card',
    description: 'This deactivates your current debit card',
  },
  {
    icon: <DeactivateIcon width={normalize(20)} height={normalize(20)} />,
    title: 'Deactivated cards',
    description: 'Your previously deactivated cards',
  },
];

export default homeMenus;
