import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { LogBox } from 'react-native';


import styles from './Styles'
import Session from './../../components/Session/Session'

import userApi from './../../services/UserApi'
import * as signalR from '@microsoft/signalr';

const SessionScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});
    const [sessions, setSessions] = useState([]); 

    useEffect(() => {
        getUser();
        configureSignalR();
        LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
    }, []);

    const getUser = () => {
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
    }

    const configureSignalR = () => {
        const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://easy-park-iw.herokuapp.com/appHub")
        .configureLogging(signalR.LogLevel.Information)
        .build();
        try {
            connection.start();
        } catch (err) {
            console.log(err);
            setTimeout(() => start(), 5000);
        } finally {
            console.log('conectou')
        }      
        connection.onclose(async() => {
            await start();
        });
        
        connection.on("SpotSet", (message) => {
            getUser()
        })
        
        connection.on("NewSession", (message) => {
            getUser()
        })
        
        connection.on("SessionFinished", (message) => {
            getUser()
        })
    }
    
    const renderItem = ({ item }) => (
        <Session key={item.startTime} session={item || {}} navigation={props.navigation}/>
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
