import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/colors'
import UserScreen from './../screens/UserScreen'
import Teste2 from './../components/Teste'

const TabNavigator = props => {
    
  const Tab = createBottomTabNavigator();
  
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
    )
};

export default TabNavigator;
