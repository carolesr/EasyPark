import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './Styles'
import Spot from './../../components/Spot/Spot'
import Row from './../../components/Spot/Row'

const ParkingLotScreen = props => {

    const [name, setName] = useState('');
    const [rows, setRows] = useState([]);
    const rowSize = 6;

    useEffect(() => {
        if (Object.keys(props.route.params.spots).length) {
            setName(props.route.params.name);
            breakRows(props.route.params.spots);       
        }
    }, [props]);

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
