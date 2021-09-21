import React from 'react';
import {DEFAULT_LIGHT_THEME} from './app/theme/defaultLight.theme';
import {ThemeProvider} from './app/theme/theme.context';

export const App = React.memo(() => {
  return <ThemeProvider initial={DEFAULT_LIGHT_THEME}></ThemeProvider>;
});
export default App;
