import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EstablishmentScreen from './../screens/EstablishmentScreen/EstablishmentScreen'
import ParkingLotScreen from './../screens/ParkingLotScreen/ParkingLotScreen'

const EstablishmentStackNavigator = props => {
    
  const Stack = createStackNavigator();
  
    return (
        <Stack.Navigator initialRouteName="establishment" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="establishment"
                component={ EstablishmentScreen }
            />
            <Stack.Screen
                name="parkinglot"
                component={ ParkingLotScreen }
            />
        </Stack.Navigator>
    )
};

export default EstablishmentStackNavigator