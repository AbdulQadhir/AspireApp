import axios from 'axios';
import {apiURLs} from '../../../constants/apiURLs';
import UserProfile from '../../../interfaces/userProfile';

export const requestGetProfile: Promise<UserProfile> = async () => {
  const profile = await axios.get<UserProfile>(apiURLs.USER_DATA);
  return profile.data;
};
