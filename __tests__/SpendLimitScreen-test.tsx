/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SpendLimitScreen from '../src/screens/SpendLimitScreen';
import {Provider} from 'react-redux';
import configureStore from '../src/config/configureStore';
import {NavigationContainer} from '@react-navigation/native';

test('Amount Selector ', () => {
  const mockFn = jest.fn();

  const {getAllByTestId, getByText} = render(
    <Provider store={configureStore}>
      <NavigationContainer>
        <SpendLimitScreen />
      </NavigationContainer>
    </Provider>,
  );

  const firstAmount = getAllByTestId('amtSelector')[0];
  fireEvent.press(firstAmount);
  getByText('5,000');
});
