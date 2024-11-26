import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Cadastro from './src/screens/Cadastrar';
import Atualizar from './src/screens/Atualizar';
import Deletar from './src/screens/Deletar';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} options={{ title: 'Home' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Atualizar" component={Atualizar} options={{ title: 'Atualizar' }} />
        <Stack.Screen name="Deletar" component={Deletar} options={{ title: 'Deletar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

