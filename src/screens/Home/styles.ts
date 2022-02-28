import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';
import {normalize} from '../../Theme/Fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  bgContainer: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: normalize(100),
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
  },
  scrollContainer: {
    marginTop: normalize(100),
  },
});

export default styles;
