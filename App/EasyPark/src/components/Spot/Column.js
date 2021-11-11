import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Spot from './Spot'
import { colors } from '../../assets/colors'

const Column = props => {

    const [spots, setSpots] = useState({});

    useEffect(() => {
        if (Object.keys(props.spots).length) {
            setSpots(props.spots)
        }
    }, [props]);

    const renderItem = ({ item }) => (        
        <Spot spot={item} />
    );

    return (
        // <View style={{flex:1,flexDirection:'row', margin:10}}>
        //     <FlatList
        //         data={spots}
        //         renderItem={renderItem}
        //         horizontal={true}
        //     />
        // </View> 
        //TODO: não sei pq não funciona com a flatlist, por enquanto fica assim
        <View>
            {Object.keys(spots).length != 0 && <View style={styles.columnContainer}>
            { 
                spots.map((item) => (
                    <Spot spot={item} /> 
                ))
            }
            </View>}
        </View>
    );
}

export default Column;
