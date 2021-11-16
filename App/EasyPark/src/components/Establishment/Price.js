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
            ? `${minuteToHour(price.minTime)} - ${minuteToHour(price.maxTime)} : R$${price.value},00`
            : `${minuteToHour(price.minTime)}+ : R$${price.value},00`
            setText(t);
            minuteToHour(price.minTime)
        }
    }, [price]);

    const minuteToHour = time => {
        return time >= 60 ? `${time / 60}h` : `${time}m`
    }

    return (
            <View>
                <Text style={styles.smallText}>{text}</Text>
            </View>
    );
}

export default Price;
