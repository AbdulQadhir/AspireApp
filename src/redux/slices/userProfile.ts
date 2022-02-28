import {createSlice} from '@reduxjs/toolkit';
import UserProfile from '../../interfaces/userProfile';

const initialState: UserProfile = {
  name: 'Mark',
  cardNumber: '2020202020202020',
  cardExpiry: '12/20',
  cvv: 123,
  availableBalance: 3000,
  spendingLimitActive: false,
  cardFrozen: false,
  loading: false,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserData: state => {
      return {
        ...state,
        loading: true,
      };
    },
    setUserProfile: (state, {payload}) => {
      return {
        ...state,
        ...payload,
        loading: false,
      };
    },
    setSpendingLimit: (state, {payload}) => {
      return {
        ...state,
        loading: true,
      };
    },
    unsetSpendingLimit: (state, {payload}) => {
      return {
        ...state,
        loading: true,
      };
    },
  },
});

export const {
  getUserData,
  setUserProfile,
  setSpendingLimit,
  unsetSpendingLimit,
} = userProfileSlice.actions;
export default userProfileSlice.reducer;
