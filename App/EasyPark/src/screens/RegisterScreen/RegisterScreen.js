import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'

const RegisterScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PersonalInfo />
                <View style={styles.textContainer}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => {
                            console.log('create account')
                            props.navigation.push('tab')
                        }}>
                        <Text style={styles.text}>create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default RegisterScreen;
