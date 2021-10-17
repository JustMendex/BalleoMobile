import React from 'react';
import {DEFAULT_LIGHT_THEME} from './app/theme/defaultLight.theme';
import {ThemeProvider} from './app/theme/theme.context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import SplashLogo from './app/assets/svg/Vector.svg';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SplashLogo />
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const App = React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
});
export default App;
