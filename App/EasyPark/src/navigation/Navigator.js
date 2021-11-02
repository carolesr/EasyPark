import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/colors'
import UserScreen from './../screens/UserScreen'
import Teste2 from './../components/Teste'

const Navigator = props => {
    
  const Tab = createBottomTabNavigator();
  
  const AppTheme = {
    colors: {
      background: colors.blue
    },
  };

  const navigatorOptions = {
    tabBarStyle: { 
      height: '8%',
      borderRadius:10,
      overflow:'hidden',
    },
  }

  const screenOptions = (icon) => {
    return {
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.orange,
        tabBarActiveBackgroundColor: colors.lightOrange,
        headerStyle: {
          height: 60,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.white
        },
        tabBarLabel: () => {return null},
        tabBarIcon: () => (
            <Icon name={icon} size={30} color={ colors.white } />
        )
    }
  }

    return (
        <NavigationContainer theme={ AppTheme } >
        <Tab.Navigator screenOptions={ navigatorOptions }>
            <Tab.Screen
                name="user info"
                component={ UserScreen }
                options={ screenOptions('user') }
            />
            <Tab.Screen
                name="establishments"
                component={ Teste2 }
                options={ screenOptions('home') }
            />
            <Tab.Screen
                name="sessions"
                component={ Teste2 }
                options={ screenOptions('history') }
            />
        </Tab.Navigator>
      </NavigationContainer>
    )
};

export default Navigator;
