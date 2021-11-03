import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { colors } from './../../assets/colors'
import styles from './Styles'

import userApi from './../../services/UserApi'

const LoginScreen = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const data = { email, password };
        userApi
            .post('login', data)
            .then(response => {
                console.log(response.data);
                if (response.data.success)
                    props.navigation.push('tab', {email: email});
                else
                    console.log(response.data.messages)
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.screen}>

            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('./../../assets/logo.png')}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor={colors.lightBlue}
                        onChangeText={t => {setEmail(t)}}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='password'
                        placeholderTextColor={colors.lightBlue}
                        secureTextEntry={true}
                        onChangeText={p => {setPassword(p)}}
                    />
                </View>

                <View style={styles.textContainer}>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('login')
                            login();
                        }}>
                        <Text style={styles.text}>login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.textSmall}>don't have an account yet?</Text>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('register')
                            props.navigation.push('register')
                        }}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textSmall}>register</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    );
}

export default LoginScreen;