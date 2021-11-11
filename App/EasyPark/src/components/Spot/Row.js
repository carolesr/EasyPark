import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Spot from './Spot'
import Column from './Column'
import { colors } from '../../assets/colors'

const Row = props => {

    const [columns, setColumns] = useState([]);
    const columnsSize = 3;

    useEffect(() => {
        if (Object.keys(props.spots).length) {
            breakColumns(props.spots)
        }
    }, [props]);

    const breakColumns = spots => {
        const columns = []
        let slot = []
        spots.forEach((item, index) => {
            slot.push(item)
            if (++index % columnsSize === 0) {
                columns.push(slot)
                slot = []
            }
        })
        columns.push(slot)
        setColumns(columns)
    }

    const renderItem = ({ item }) => (  
        <Column spots={item} />
    );

    return (
        <View style={styles.rowContainer}>
            <FlatList
                data={columns}
                renderItem={renderItem}
                horizontal={true}
            />
        </View> 
    );
}

export default Row;
