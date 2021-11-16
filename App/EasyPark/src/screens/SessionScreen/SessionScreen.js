import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

import styles from './Styles'
import Session from './../../components/Session/Session'

import userApi from './../../services/UserApi'

const SessionScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        userApi
            .get(`getUser?email=${email}`)
            .then(response => {
                setUser(response.data.result);
                const array = response.data.result.sessions.sort((a,b) => {
                    return new Date(b.startTime) - new Date(a.startTime);
                });
                setSessions(array);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    const renderItem = ({ item }) => (
        <Session session={item || {}} navigation={props.navigation}/>
    );
    
    return (
        <View>
            <FlatList
                data={sessions}
                renderItem={renderItem}
            />
        </View>
    );
}

export default SessionScreen;
