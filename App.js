import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Drawer.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
        <Drawer.Screen name="ProductDetails" component={ProductDetailScreen} options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;