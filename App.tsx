import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/app-navigation';
import LoginVerifyEmailModal from './src/modals/login-verify-email/login-verify-email.modal';
// import PartyJoinRequested from './src/modals/party-join-requested/party-join-requested.modal';
import ProfileEditLocation from './src/modals/profile-edit-location.modal/profile-edit-location.modal';
import { Provider } from 'react-redux';
import store from './src/store/store'


const App: any = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{  width: '100%', height: '100%', }}>
      <AppNavigation />
      <LoginVerifyEmailModal />
      {/* <PartyJoinRequested /> */}
      <ProfileEditLocation />
    </SafeAreaView>
    </Provider>
  )
};

export default App;
