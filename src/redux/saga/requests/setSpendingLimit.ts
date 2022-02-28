import axios from 'axios';
import {apiURLs} from '../../../constants/apiURLs';

interface Props {
  action: string;
  payload: number;
}

export const requestSetSpendingLimit: Promise<boolean> = async (
  props: Props,
) => {
  try {
    await axios.put(apiURLs.USER_DATA, {
      spendingLimit: props.payload,
      spendingLimitActive: true,
    });
    return true;
  } catch (error) {
    return false;
  }
};
