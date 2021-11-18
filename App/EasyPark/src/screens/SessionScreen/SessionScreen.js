import React, { useState, useEffect } from 'react';
import { View, FlatList, Tex, LogBox, ActivityIndicator } from 'react-native';

import { colors } from './../../assets/colors'
import styles from './Styles'

import Session from './../../components/Session/Session'

import userApi from './../../services/UserApi'
import * as signalR from '@microsoft/signalr';

const SessionScreen = props => {

    const email = props.email;
    const [user, setUser] = useState({});
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser();
        configureSignalR();
        LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
    }, []);

    const getUser = () => {
        setLoading(true);
        userApi
            .get(`getUser?email=${email}`)
            .then(response => {
                setUser(response.data.result);
                const array = response.data.result.sessions.sort((a,b) => {
                    return new Date(b.startTime) - new Date(a.startTime);
                });
                setSessions(array);
                setLoading(false);
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
            
            {loading && <View style={styles.loading}>
                <ActivityIndicator
                    size="large"
                    color={colors.orange}
                />
            </View>}
        </View>
    );
}

export default SessionScreen;
