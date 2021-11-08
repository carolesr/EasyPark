import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Item = props => {

    const [name, setName] = useState('');
    const [plate, setPlate] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        setName(props.vehicle.name)
        setPlate(props.vehicle.plate)
        setId(props.vehicle.id)
    }, [props])

    return (
        <View style={styles.namePlateContainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={name}
                    onChangeText={t => {
                        setName(t)
                        props.updateItem(id, t, plate)
                    }}
                    style={styles.input}
                    placeholder='name'
                    placeholderTextColor={colors.lightBlue}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    value={plate}
                    onChangeText={t => {
                        setPlate(t)
                        props.updateItem(id, name, t)
                    }}
                    style={styles.input}
                    placeholder='plate'
                    placeholderTextColor={colors.lightBlue}
                />
            </View>
            {props.canRemove ? 
            <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                    props.removeItem(id);
                }}>
                <View style={styles.removeContainer}>
                    <Icon name="remove" size={20} color={colors.orange} />
                </View>
            </TouchableOpacity>
            :
            <View style={styles.removeContainer}>
                <Icon name="remove" size={20} color={colors.white} />
            </View>
            }
        </View>
    );
}

export default Item;
