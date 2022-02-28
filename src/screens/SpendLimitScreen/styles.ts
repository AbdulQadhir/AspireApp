import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';
import {FontStyle, normalize} from '../../Theme/Fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: normalize(15),
    borderTopLeftRadius: normalize(15),
    padding: normalize(20),
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  txtTitle: {
    ...FontStyle.small,
    color: Colors.blackText,
    marginLeft: normalize(5),
  },
  amtHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(10),
    borderBottomWidth: 1,
    borderColor: Colors.border,
    marginTop: normalize(10),
  },
  txtAmount: {
    ...FontStyle.largeBold,
    color: Colors.blackText,
    marginLeft: normalize(5),
  },
  txtNote: {
    ...FontStyle.small,
    color: Colors.greyText,
    marginTop: normalize(10),
  },
  amtSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(10),
  },
  btnContainer: {
    backgroundColor: Colors.white,
    padding: normalize(20),
  },
});

export default styles;
