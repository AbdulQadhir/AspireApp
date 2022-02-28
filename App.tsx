import 'react-native-gesture-handler';
import React from 'react';
import MainNav from './src/navigation/mainNav';
import configureStore from './src/config/configureStore';
import {Provider} from 'react-redux';
import {ApplicationStyles, Colors} from './src/Theme';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaView style={ApplicationStyles.topSafeArea} />
      <SafeAreaView style={ApplicationStyles.appContainer}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
        <MainNav />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
