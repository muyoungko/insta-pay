import { Platform, Dimensions} from 'react-native';

export default class Util{;
  static getFontSize(size)
  {
    return Platform.OS === 'ios' ? size : size*0.9;
  }

  static getStatusBarHeight()
  {
    return Platform.OS === 'ios' ? 20 : 0;
  }
};
