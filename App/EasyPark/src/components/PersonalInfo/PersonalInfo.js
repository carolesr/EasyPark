import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Styles'
import { colors } from '../../assets/colors'

const PersonalInfo = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>personal info</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='password'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.phoneCPFContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='CPF'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View><View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='phone'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>            
        </View>
    );
}

export default PersonalInfo;
