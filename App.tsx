import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';
import {ProductsProvider} from './src/context/ProductsContext';

const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
