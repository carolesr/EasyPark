import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Item from './Item'
import { colors } from '../../assets/colors'

import userApi from '../../services/UserApi'

const CreditCards  = props => {

    const user = props.user;    
    const [listComponents, setListComponents] = useState([]);
    const [loading, setLoading] = useState(false); 
    const listRef = useRef(listComponents);
    
    useEffect(() => {
        if (user.cards != undefined) {
            const components = user.cards.map((item, index) => {
                return {
                    'id': index,
                    'name': item.name,
                    'number': item.plate,
                    'expiration': item.plate,
                    'cvv': item.plate,
                    'component': <Item id={index} card={{'id': index, ...item}} canRemove={index} updateItem={updateItem} removeItem={removeItem}/>
                }
            })
            listRef.current = components
            setListComponents(components)
        }
    }, [user]);
    
    const addItem = () => {
        const newId = listComponents.length ? listComponents.slice(-1)[0]['id'] + 1 || 0 : 0
        const newItem = {
            'id': newId, 
            'name': '',
            'number': '',
            'expiration': '',
            'cvv': '',
            'component': <Item id={newId} card={{'id': newId, 'name': '', 'number': '', 'expiration': '', 'cvv': '',}} canRemove={newId} updateItem={updateItem} removeItem={removeItem}/>
        }
        setListComponents(prevArray => [...prevArray, newItem])
        listRef.current = [...listComponents, newItem]
    }

    const updateItem = (id, name, number, expiration, cvv, selected) => {
        const index = listRef.current.findIndex(x => x.id == id);
        const item = listRef.current[index];
        item.name = name;
        item.number = number;
        item.expiration = expiration;
        item.cvv = cvv;
        item.selected = selected;
        const aux = listRef.current;
        aux[index] = item;
        setListComponents(aux);
        listRef.current = aux;
    }
    
    const removeItem = id => {
        const newList = listRef.current.filter(x => x.id != id);
        setListComponents(newList);
        listRef.current = newList;
    }

    const saveCards = () => {
        setLoading(true);
        const data = {
            email: user.email, 
            cards: listComponents.map(x => { 
                return { 'name': x.name, 'number': x.number, 'expiration': x.expiration, 'cvv': x.cvv, 'selected': x.selected }
            })
        }
        userApi
            .put('updateCards', data)
            .then(response => {
                ToastAndroid.show(response.data.messages[0], ToastAndroid.SHORT)
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>credit cards</Text>
                </View>

                {listComponents.map(x => x.component)}

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            addItem()
                        }}>
                        <View style={styles.addContainer}>
                            <Icon name="plus" size={30} color={colors.orange} />
                            <Text style={styles.text}>add more</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4}  onPress={() => {
                            saveCards()
                        }}>
                        <View style={styles.saveContainer}>
                            <Icon name="save" size={30} color={colors.orange} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {loading && <View style={styles.loading}>
                <ActivityIndicator
                    size="large"
                    color={colors.orange}
                />
            </View>}
                  
        </View>
    );
}

export default CreditCards;
