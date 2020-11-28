import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const layoutScreenWidth = 360;
const layoutScreenHeight = 640;

export const cw = (pixels: number): number => {
  const proportion = (pixels / layoutScreenWidth) * 100;
  return wp(proportion);
};

export const ch = (pixels: number): number => {
  const proportion = (pixels / layoutScreenHeight) * 100;
  return hp(proportion);
};
