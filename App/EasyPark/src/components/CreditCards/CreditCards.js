import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import { colors } from '../../assets/colors'

const CreditCards  = props => {
    
    const user = props.user;
    
    useEffect(() => {
        console.log(user.cards)
    }, [user]);

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>credit cards</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='number'
                        placeholderTextColor={colors.lightBlue}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor={colors.lightBlue}
                    />
                </View>
                <View style={styles.expirationCVVcontainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='expiration'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View><View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='CVV'
                            placeholderTextColor={colors.lightBlue}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('add more cards')
                        }}>
                        <View style={styles.addContainer}>
                            <Icon name="plus" size={30} color={colors.orange} />
                            <Text style={styles.text}>add more</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            console.log('save')
                        }}>
                        <View style={styles.saveContainer}>
                            <Icon name="save" size={30} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    );
}

export default CreditCards;
