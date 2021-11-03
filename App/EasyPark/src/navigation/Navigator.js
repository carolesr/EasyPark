import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from '../assets/colors'
import StackNavigator from './StackNavigator'

const Navigator = props => {
  
  const AppTheme = {
    colors: {
      background: colors.blue
    },
  };

    return (
        <NavigationContainer theme={ AppTheme } >
          <StackNavigator />
      </NavigationContainer>
    )
};

export default Navigator;
