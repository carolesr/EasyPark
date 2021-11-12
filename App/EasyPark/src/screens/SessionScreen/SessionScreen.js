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
                console.log(response.data.result)
                setUser(response.data.result);
                setSessions(response.data.result.sessions)
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
