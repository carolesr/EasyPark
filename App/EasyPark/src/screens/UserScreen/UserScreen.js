import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { LogBox } from 'react-native';

import styles from './Styles'
import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'
import Vehicles from './../../components/Vehicles/Vehicles'
import CreditCards from './../../components/CreditCards/CreditCards'

import userApi from './../../services/UserApi'

const UserScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});

    useEffect(() => {
        LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop']);
        userApi
            .get(`getUser?email=${email}`)
            .then(response => {
                setUser(response.data.result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PersonalInfo key={0} user={user} />
                <Vehicles key={1} user={user} />
                <CreditCards key={2} user={user} />
            </View>
        </ScrollView>
    );
}

export default UserScreen;
