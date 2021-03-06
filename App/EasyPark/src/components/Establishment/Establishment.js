import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Price from './Price'
import { colors } from '../../assets/colors'

const Establishment = props => {

    const establishment = props.establishment;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        if (Object.keys(establishment).length) {
            setId(establishment.id);
            setName(establishment.name);
            setAddress(establishment.address);
            setPrices(establishment.prices);
        }
    }, [establishment]);

    const renderItem = ({ item }) => (
        <Price price={item || {}}/>
    );

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.text}>{address}</Text>
                    </View>

                    <View style={styles.pricesContanier}>
                        <FlatList
                            data={prices}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            props.navigation.push('parkinglot', {name: name, id: id})
                        }}>
                        <View style={styles.iconContainer}>
                            <Icon name="map" size={50} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>            
        </View>
    );
}

export default Establishment;
