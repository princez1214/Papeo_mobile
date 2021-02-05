import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginVerifyEmailModalReducer from './modals/login-verify-email/login-verify-email.reducer';
import partyJoinRequestModalReducer from './modals/party-join-request/party-join-request.reducer';
import profileEditBasicInfoModalReducer from './modals/profile-edit-basic-info/profile-edit-basic-info.reducer';
import createPartyFormReducer from './party/create-party-form/create-party-form.reducer';

// imports for Reducers

const store = createStore(
  combineReducers({
    // modals
    loginVerifyEmailModal: loginVerifyEmailModalReducer, // open login verify email modal
    partyJoinRequestModal: partyJoinRequestModalReducer, // open party join request modal
    profileEditBasicInfoModal: profileEditBasicInfoModalReducer, // open profile edit basic info modal
    // party
    createPartyForm: createPartyFormReducer,
  }),
);

export default store;
