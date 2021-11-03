import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const PersonalInfo = props => {

    const user = props.user;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setCPF(user.cpf);
        setPhone(user.phone);
    }, [user]);

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>personal info</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={t => setName(t)}
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={email}
                        onChangeText={t => setEmail(t)}
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={password}
                        onChangeText={t => setPassword(t)}
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
                            onChangeText={t => setCPF(t)}
                            style={styles.input}
                            placeholder='CPF'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            value={phone}
                            onChangeText={t => setPhone(t)}
                            style={styles.input}
                            placeholder='phone'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('save')
                        }}>
                        <View style={styles.saveContainer}>
                            <Icon name="save" size={30} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    );
}

export default PersonalInfo;
