import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PgAlim from './PgControlAlim';
import Home from './PgPrincipal';
import PgCad from './PgCadAnimal';
import PgAdd from './PgAddPeso';
import PgRelatorio from './PgRelatorio';
import PgAtt from './PgAtt';
import PgDel from './PgDel';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAlim" component={PgAlim} options={{ headerShown: false }}/>
        <Stack.Screen name="PgCad" component={PgCad} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAdd" component={PgAdd} options={{ headerShown: false }}/>
        <Stack.Screen name="PgRelatorio" component={PgRelatorio} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAtt" component={PgAtt} options={{ headerShown: false }}/>
        <Stack.Screen name="PgDel" component={PgDel} options={{ headerShown: false }}/>
        
        
  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
