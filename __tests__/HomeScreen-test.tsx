/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import CardHolder from '../src/screens/Home/components/CardHolder';
import UserProfile from '../src/interfaces/userProfile';
import CardSwitcher from '../src/screens/Home/components/CardSwitcher';

test('Test whether card switch hides the information', () => {
  const data: UserProfile = {
    name: 'Mark Henry',
    cardNumber: '1111 1111 1111 1111',
    cvv: 123,
    cardExpiry: '12/20',
  };

  const {getByTestId, getByText} = render(<CardHolder data={data} />);

  const btnSwitch = getByTestId('cardSwitcher');
  fireEvent.press(btnSwitch);
  getByText('1111 1111 1111 1111');
  getByText('CVV: 123');
  fireEvent.press(btnSwitch);
  getByText('CVV: ***');
  getByText('•••• •••• •••• 1111');
});
