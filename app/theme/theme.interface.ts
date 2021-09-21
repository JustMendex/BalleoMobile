export interface ColorTheme {
  primary: string;
  sucess: string;
  fail: string;
  black: string;
  grey: string;
  secondGrey: string;
  background: string;
}
export interface SpacingTheme {
  tiny: number;
  small: number;
  base: number;
  large: number;
  xLarge: number;
  xlLarge: number;
}

export interface TypeTheme {
  micro: number;
  tiny: number;
  small: number;
  regular: number;
  large: number;
  title3: number;
  title2: number;
  title1: number;
}
export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
  type: TypeTheme;
}
