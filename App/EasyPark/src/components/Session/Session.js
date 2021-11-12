import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Session = props => {

    const session = props.session;

    const [establishment, setEstablishment] = useState('');
    const [startTime, setStartTime] = useState('');
    const [date, setDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [spot, setSpot] = useState('');
    const [value, setValue] = useState('');
    const [card, setCard] = useState('');

    useEffect(() => {
        if (Object.keys(session).length) {
            setEstablishment(session.establishment);
            setDate(convertDate(session.startTime));
            setStartTime(convertTime(session.startTime));
            if (session.endTime != null)
                setEndTime(convertTime(session.endTime));
            if (session.spot != null)
                setSpot(session.spot);
            if (session.value != null)
                setValue(session.value);
            if (session.card != null)
                setCard(session.card);
        }
    }, [session]);

    const convertDate = datetime => {
        const date = datetime.split('T')[0].split('-')
        return `${date[2]}/${date[1]}/${date[0]}`
    }

    const convertTime = time => {
        const datetime = new Date(session.startTime)
        return`${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <View>
                        <Text style={styles.title}>{date} - R${value}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{establishment}</Text>
                    </View>
                    <View>
                        <Text style={styles.smallText}>entrance - {startTime}</Text>
                    </View>
                    <View>
                        <Text style={styles.smallText}>exit - {endTime}</Text>
                    </View>
                    <View>
                        <Text style={styles.smallText}>paid with {card}</Text>
                    </View>
                </View>
                <View style={styles.spotContainer}>
                    {spot != '' ?
                    <Text style={styles.spot}>{spot}</Text> :
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log(establishment)
                        }}>
                        <View style={styles.iconContainer}>
                            <Icon name="spinner" size={50} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                    }
                </View>

            </View>            
        </View>
    );
}

export default Session;
