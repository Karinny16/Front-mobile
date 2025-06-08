import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/home';
import Assembleia from './src/pages/assembleia/assembleia';
import AssembleiaText from './src/pages/assembleia/assembleiaText';
import Comunicados from './src/pages/Comunicados/comunicados';
import ComunicadosText from './src/pages/Comunicados/comunicadosText';

import BottomRoutes from './src/routes/botton.routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomRoutes">
        <Stack.Screen 
          name="BottomRoutes" 
          component={BottomRoutes} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Início' }} 
        />
        <Stack.Screen 
          name="Assembleia" 
          component={Assembleia} 
          options={{ title: 'Assembleia' }} 
        />
         <Stack.Screen 
          name="AssembleiaText" 
          component={AssembleiaText} 
          options={{ title: 'Assembleia Post' }} 
        />
         <Stack.Screen 
          name="Comunicados" 
          component={Comunicados} 
          options={{ title: 'Comunicados' }} 
        />
         <Stack.Screen 
          name="ComunicadosText" 
          component={ComunicadosText} 
          options={{ title: 'Comunicados Post' }} 
        />
        {/* Se desejar, adicione outras telas, como Login, quando necessário */}
        {/* <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ title: 'Login' }} 
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
