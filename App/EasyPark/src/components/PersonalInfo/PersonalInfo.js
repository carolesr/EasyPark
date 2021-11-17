import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

import userApi from '../../services/UserApi'

const PersonalInfo = props => {

    const user = props.user;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [phone, setPhone] = useState('');

    const [isNewUser, setIsNewUser] = useState(true);

    useEffect(() => {
        if (Object.keys(user).length) {
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
            setCPF(user.cpf);
            setPhone(user.phone);
            setIsNewUser(false);
        }
    }, [user]);

    const saveUser = () => {
        const data = {
            name, email, password, CPF, phone
        }
        userApi
            .put('updateUser', data)
            .then(response => {
                ToastAndroid.show(response.data.messages[0], ToastAndroid.SHORT)
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>{isNewUser ? 'new account' : 'personal info'}</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={t => {
                            setName(t)
                            if (isNewUser) props.setName(t)                            
                        }}
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={email}
                        onChangeText={t => {
                            setEmail(t)
                            if (isNewUser) props.setEmail(t)                            
                        }}
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={password}
                        onChangeText={t => {
                            setPassword(t)
                            if (isNewUser) props.setPassword(t)                            
                        }}
                        style={styles.input}
                        placeholder='password'
                        placeholderTextColor={colors.lightBlue}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.phoneCPFContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            value={CPF}
                                onChangeText={t => {
                                setCPF(t)
                                if (isNewUser) props.setCPF(t)                            
                            }}
                            style={styles.input}
                            placeholder='CPF'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            value={phone}
                            onChangeText={t => {
                                setPhone(t)
                                if (isNewUser) props.setPhone(t)                            
                            }}
                            style={styles.input}
                            placeholder='phone'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {!isNewUser && <View>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            saveUser()
                        }}>
                        <View style={styles.saveContainer}>
                            <Icon name="save" size={30} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                </View>}
            </View>            
        </View>
    );
}

export default PersonalInfo;
