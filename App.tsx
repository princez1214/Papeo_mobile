/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/login/index';
import TermsConditions from './src/screens/terms-and-conditions/terms-and-conditions.screen';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <TermsConditions />
        {/* <TermsConditions /> */}
    </>
  );
};

export default App;
