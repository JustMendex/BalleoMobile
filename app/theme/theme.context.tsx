import React from 'react';
import {DEFAULT_LIGHT_THEME} from './defaultLight.theme';
import {Theme} from './theme.interface';

interface ProvidedValue {
  theme: Theme;
  toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  // Store the actual theme as an internal state of the provider
  const [theme, setTheme] = React.useState<Theme>(props.initial); // Implement a method for toggling the Theme
  // We're using the useCallback hook for optimization
  const ToggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      // if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
      //   return DEFAULT_DARK_THEME;
      // }      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
      //   return DEFAULT_LIGHT_THEME;
      // }
      return currentTheme;
    });
  }, []);

  // Building up the provided object
  // We're using the React.useMemo hook for optimization
  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]); // Render our context provider by passing it the value to provide
  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

// Creating a custom context consumer hook for function components
export const useTheme = () => React.useContext(Context);
