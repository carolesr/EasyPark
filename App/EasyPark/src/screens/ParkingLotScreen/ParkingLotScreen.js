import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, LogBox } from 'react-native';

import styles from './Styles'
import Spot from './../../components/Spot/Spot'
import Row from './../../components/Spot/Row'

import establishmentApi from './../../services/EstablishmentApi'
import * as signalR from '@microsoft/signalr'

const ParkingLotScreen = props => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [rows, setRows] = useState([]);
    const rowSize = 6;

    useEffect(() => {
        setId(props.route.params.id);
        setName(props.route.params.name);
        getEstablishment(props.route.params.id);
        configureSignalR();
        LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
    }, [props]);

    const getEstablishment = id => {
        establishmentApi
            .get(`getEstablishment?establishmentId=${id}`)
            .then(response => {
                breakRows(response.data.result.spots)
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
        
        connection.on("SpotStatusChenged", (message) => {
            if (message == id)
                getEstablishment(message)
        })
    }

    const breakRows = spots => {
        const rows = []
        let slot = []
        spots.forEach((item, index) => {
            slot.push(item)
            if (++index % rowSize === 0) {
                rows.push(slot)
                slot = []
            }
        })
        rows.push(slot)
        setRows(rows)
    }

    const renderItem = ({ item }) => (
        <Row spots={item} />
    );
    
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
            
                <View>
                    <Text style={styles.title}>{name}</Text>
                </View>

                <FlatList
                    data={rows}
                    renderItem={renderItem}
                    horizontal={false}
                />

                <View>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('voltar')
                            props.navigation.goBack()
                        }}>
                        <View>
                            <Text style={styles.text}>voltar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}

export default ParkingLotScreen;
