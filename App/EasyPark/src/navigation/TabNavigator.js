import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/colors'
import EstablishmentStackNavigator from './EstablishmentStackNavigator'
import UserScreen from './../screens/UserScreen/UserScreen'
import SessionScreen from './../screens/SessionScreen/SessionScreen'

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
        ),
    }
  }

    return (
        <Tab.Navigator screenOptions={ navigatorOptions }>
            <Tab.Screen
                name="user info"
                children={() => <UserScreen email={props.route.params.email} /> }
                options={ screenOptions('user') }
            />
            <Tab.Screen
                name="establishments"
                component={ EstablishmentStackNavigator }
                options={ screenOptions('map-signs') }
            />
            <Tab.Screen
                name="sessions"
                children={() => <SessionScreen email={props.route.params.email} /> }
                options={ screenOptions('history') }
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;
