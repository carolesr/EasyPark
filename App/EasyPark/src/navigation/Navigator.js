import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Teste from './../components/Teste'
import Teste2 from './../components/Teste'

const Navigator = props => {
    
  const Tab = createBottomTabNavigator();
  
  const AppTheme = {
    colors: {
      background: '#002C4F'
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
        tabBarActiveTintColor: '#F1F1F1',
        tabBarInactiveBackgroundColor: '#E88948',
        tabBarActiveBackgroundColor: '#F2BF9C',
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#F1F1F1'
        },
        tabBarLabel: () => {return null},
        tabBarIcon: () => (
            <Icon name={icon} size={30} color={'#F1F1F1'} />
        )
    }
  }

    return (
        <NavigationContainer theme={ AppTheme } >
        <Tab.Navigator screenOptions={ navigatorOptions }>
            <Tab.Screen
                name="user info"
                component={ Teste }
                options={ screenOptions('user') }
            />
            <Tab.Screen
                name="establishments"
                component={ Teste2 }
                options={ screenOptions('home') }
            />
            <Tab.Screen
                name="sessions"
                component={ Teste }
                options={ screenOptions('history') }
            />
        </Tab.Navigator>
      </NavigationContainer>
    )
};

export default Navigator;
