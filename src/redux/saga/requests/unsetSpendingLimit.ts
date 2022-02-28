import axios from 'axios';
import {apiURLs} from '../../../constants/apiURLs';

export const requestUnsetSpendingLimit: Promise<boolean> = async () => {
  try {
    await axios.put(apiURLs.USER_DATA, {
      spendingLimitActive: false,
    });
    return true;
  } catch (error) {
    return false;
  }
};
