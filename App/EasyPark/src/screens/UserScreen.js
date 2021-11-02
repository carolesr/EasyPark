import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableOpacity } from 'react-native';

import PersonalInfo from './../components/PersonalInfo/PersonalInfo'

const UserScreen = () => {
    return (
        <View>
            <PersonalInfo />
        </View>
    );
}

export default UserScreen;
