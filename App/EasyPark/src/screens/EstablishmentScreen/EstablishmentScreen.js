import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './Styles'
import Establishment from './../../components/Establishment/Establishment'

import establishmentApi from './../../services/EstablishmentApi'

const EstablishmentScreen = props => {

    const [establishments, setEstablishments] = useState([]);

    useEffect(() => {
        establishmentApi
            .get(`getAll`)
            .then(response => {
                setEstablishments(response.data.result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const renderItem = ({ item }) => (
        <Establishment establishment={item || {}} navigation={props.navigation}/>
    );
    
    return (
        <View>
            <FlatList
                data={establishments}
                renderItem={renderItem}
            />
        </View>
    );
}

export default EstablishmentScreen;
