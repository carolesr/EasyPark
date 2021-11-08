import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'
import Vehicles from './../../components/Vehicles/Vehicles'
import CreditCards from './../../components/CreditCards/CreditCards'

import userApi from './../../services/UserApi'

const UserScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});

    useEffect(() => {
        userApi
            .get(`getUser?email=${email}`)
            .then(response => {
                console.log('GET USER')
                console.log(response.data)
                setUser(response.data.result);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PersonalInfo user={user} />
                <Vehicles user={user} />
                <CreditCards user={user} />
            </View>
        </ScrollView>
    );
}

export default UserScreen;
