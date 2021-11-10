import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Price = props => {

    const price = props.price;
    const [text, setText] = useState('');

    useEffect(() => {
        if (Object.keys(price).length) {
            const t = price.maxTime
            ? `${price.minTime}h - ${price.maxTime}h : R$${price.value}/h`
            : `${price.minTime}h+ : R$${price.value}/h`
            setText(t);
        }
    }, [price]);

    return (
            <View>
                <Text style={styles.smallText}>{text}</Text>
            </View>
    );
}

export default Price;
