import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Item = props => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [CVV, setCVV] = useState('');
    const [selected, setSelected] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        setNumber(props.card.number)
        setName(props.card.name)
        setExpiration(props.card.expiration)
        setCVV(props.card.cvv)
        setSelected(props.card.selected)
        setId(props.card.id)
    }, [props])

    return (
        <View style={styles.itemContainer}>
            <View style={styles.expirationCVVcontainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={number}
                        onChangeText={t => {
                            setNumber(t)
                            props.updateItem(id, name, t, expiration, CVV, selected)
                        }}
                        style={styles.input}
                        placeholder='number'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={t => {
                            setName(t)
                            props.updateItem(id, t, number, expiration, CVV, selected)
                        }}
                        style={styles.input}
                        placeholder='name'
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
            <View style={styles.expirationCVVcontainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={expiration}
                        onChangeText={t => {
                            setExpiration(t)
                            props.updateItem(id, name, number, t, CVV, selected)
                        }}
                        style={styles.input}
                        placeholder='expiration'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={CVV}
                        onChangeText={t => {
                            setCVV(t)
                            props.updateItem(id, name, number, expiration, t, selected)
                        }}
                        style={styles.input}
                        placeholder='CVV'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={selected}
                        tintColors={{ true: colors.blue, false: colors.blue }}
                        onValueChange={v => {
                            setSelected(v)
                            props.updateItem(id, name, number, expiration, CVV, v)
                        }}
                    />
                </View>
            </View>
            
        </View>
    );
}

export default Item;
