import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const Item = props => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [CVV, setCVV] = useState('');

    useEffect(() => {
        console.log(props.card)
        setNumber(props.card.number)
        setName(props.card.name)
        setExpiration(props.card.expiration)
        setCVV(props.card.cvv)
    }, [props])

    return (
        <View style={styles.itemContainer}>
            <View style={styles.expirationCVVcontainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={number}
                        onChangeText={t => setNumber(t)}
                        style={styles.input}
                        placeholder='number'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={t => setName(t)}
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                {props.canRemove ? 
                <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                        console.log(name)
                        props.removeItem(props.id);
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
                        onChangeText={t => setExpiration(t)}
                        style={styles.input}
                        placeholder='expiration'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    {console.log(CVV)}
                    <TextInput 
                        value={CVV}
                        onChangeText={t => setCVV(t)}
                        style={styles.input}
                        placeholder='CVV'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.removeContainer}>
                    <Icon name="remove" size={20} color={colors.white} />
                </View>
            </View>
            
        </View>
    );
}

export default Item;
