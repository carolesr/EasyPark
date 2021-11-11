import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Spot = props => {

    const spot = props.spot;

    const [description, setDescription] = useState('');
    const [occupied, setOccupied] = useState(false);
    const [forDisabled, setForDisabled] = useState(false);
    const [forElderly, setForElderly] = useState(false);

    useEffect(() => {
        if (Object.keys(spot).length) {
            setDescription(spot.description);
            setOccupied(spot.occupied);
            setForDisabled(spot.forDisabled);
            setForElderly(spot.forElderly);
        }
    }, [spot]);

    return (
        <View style={[styles.spot, occupied ? styles.occupied : styles.notOccupied]}>
            <View>
                <Text style={styles.text}>{description}</Text>
            </View> 
            {forDisabled && <View>
                <Icon name="wheelchair" size={20} color={colors.blue} />
            </View>}
            {forElderly && <View>
                <Icon name="blind" size={19} color={colors.blue} />
            </View>}
            {(!forDisabled && !forElderly) && <View style={styles.emptyIcon}>
                
            </View>}
        </View> 
    );
}

export default Spot;
