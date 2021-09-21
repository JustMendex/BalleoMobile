import {ColorTheme, SpacingTheme, Theme, TypeTheme} from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: '#FF5C39',
  sucess: '#289970',
  fail: '#FF7F7F',
  black: '#110202',
  grey: '#767676',
  secondGrey: '#C4C4C4',
  background: '#FDFDFD',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  tiny: 8,
  small: 16,
  base: 20,
  large: 30,
  xLarge: 50,
  xlLarge: 60,
};

const DEFAULT_LIGHT_TYPE_THEME: TypeTheme = {
  micro: 8,
  tiny: 11,
  small: 14,
  regular: 17,
  large: 19,
  title3: 24,
  title2: 32,
  title1: 44,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
  type: DEFAULT_LIGHT_TYPE_THEME,
};
