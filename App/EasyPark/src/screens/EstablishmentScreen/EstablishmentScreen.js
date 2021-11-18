import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { colors } from './../../assets/colors'
import styles from './Styles'

import Establishment from './../../components/Establishment/Establishment'

import establishmentApi from './../../services/EstablishmentApi'

const EstablishmentScreen = props => {

    const [establishments, setEstablishments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        establishmentApi
            .get(`getAll`)
            .then(response => {
                setEstablishments(response.data.result);
                setLoading(false);
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

            {loading && <View style={styles.loading}>
                <ActivityIndicator
                    size="large"
                    color={colors.orange}
                />
            </View>}
        </View>
    );
}

export default EstablishmentScreen;
