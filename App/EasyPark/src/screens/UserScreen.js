import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../components/PersonalInfo/PersonalInfo'
import Vehicles from './../components/Vehicles/Vehicles'
import CreditCards from './../components/CreditCards/CreditCards'

const UserScreen = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PersonalInfo />
                <Vehicles />
                <CreditCards />
            </View>
        </ScrollView>
    );
}

export default UserScreen;
