import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableOpacity } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../components/PersonalInfo/PersonalInfo'
import Vehicles from './../components/Vehicles/Vehicles'

const UserScreen = () => {
    return (
        <View style={styles.screen}>
            <PersonalInfo />
            <Vehicles />
        </View>
    );
}

export default UserScreen;
