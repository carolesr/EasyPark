import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'

import userApi from './../../services/UserApi'

const RegisterScreen = props => {
    
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PersonalInfo user={{}}/>
                <View style={styles.textContainer}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => {
                            console.log('create account')
                            console.log(name);
                            // props.navigation.push('tab')
                        }}>
                        <Text style={styles.text}>create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default RegisterScreen;
