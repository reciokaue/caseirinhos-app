import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { LoginStack } from './stack.routes';
import { StackRoutes } from './stack.routes';

function Routes(){
  return (
    <NavigationContainer>
      {/* <LoginStack/> */}
      <StackRoutes/>
    </NavigationContainer>
  );
}

export default Routes;