import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { LogBox } from 'react-native';

import { colors } from './../../assets/colors'
import styles from './Styles'

import PersonalInfo from './../../components/PersonalInfo/PersonalInfo'
import Vehicles from './../../components/Vehicles/Vehicles'
import CreditCards from './../../components/CreditCards/CreditCards'

import userApi from './../../services/UserApi'

const UserScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop']);
        setLoading(true);
        userApi
            .get(`getUser?email=${email}`)
            .then(response => {
                setUser(response.data.result);
                setLoading(false);
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

export default UserScreen;
