import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FontSize = {
  mini: normalize(10),
  small: normalize(12),
  medium: normalize(14),
  large: normalize(16),
  xlarge: normalize(18),
};

export const FontStyle = {
  tiny: {
    fontSize: normalize(8),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  tinyBold: {
    fontSize: normalize(8),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  mini: {
    fontSize: normalize(10),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  miniBold: {
    fontSize: normalize(10),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  small: {
    fontSize: normalize(12),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  smallBold: {
    fontSize: normalize(12),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  medium: {
    fontSize: normalize(14),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  mediumBold: {
    fontSize: normalize(14),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  large: {
    fontSize: normalize(16),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  largeBold: {
    fontSize: normalize(16),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  xlarge: {
    fontSize: normalize(18),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  xlargeBold: {
    fontSize: normalize(18),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  xxlarge: {
    fontSize: normalize(20),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  xxlargeMedium: {
    fontSize: normalize(20),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  xxlargeBold: {
    fontSize: normalize(20),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  xxxlarge: {
    fontSize: normalize(24),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  xxxlargeMedium: {
    fontSize: normalize(24),
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  xxxlargeBold: {
    fontSize: normalize(24),
    fontFamily: 'AvenirNextLTPro-Bold',
  },
};
