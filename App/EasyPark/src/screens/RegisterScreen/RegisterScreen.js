import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, ToastAndroid, ActivityIndicator } from 'react-native';

import { colors } from './../../assets/colors'
import styles from './Styles'
import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'

import userApi from './../../services/UserApi'

const RegisterScreen = props => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const createUser = () => {
        setLoading(true);
        const data = {
            name, email, password, CPF, phone
        }
        userApi
            .post('create', data)
            .then(response => {
                ToastAndroid.show(response.data.messages[0], ToastAndroid.SHORT)
                if (response.data.success)
                    props.navigation.push('tab', {email: email});
            setLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <ScrollView>
            <View style={styles.screen}>

                <PersonalInfo user={{}} setName={setName} setEmail={setEmail} setPassword={setPassword} setCPF={setCPF} setPhone={setPhone}/>

                <View style={styles.textContainer}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={() => {
                            createUser();
                        }}>
                        <Text style={styles.text}>create account</Text>
                    </TouchableOpacity>
                </View>

                {loading && <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color={colors.orange}
                    />
                </View>}

            </View>
        </ScrollView>
    );
}

export default RegisterScreen;
