//LIBS
import React from 'react';
import { ThemeProvider } from 'styled-components';

//FONTS
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

//COMPONENTS
import Register from './src/screens/Register';
import theme from './src/global/styles/theme';

//AppLoading
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}


