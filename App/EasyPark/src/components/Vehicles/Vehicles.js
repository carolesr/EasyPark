import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Item from './Item'
import { colors } from '../../assets/colors'

import userApi from '../../services/UserApi'

const Vehicles = props => {

    const user = props.user;    
    const [listComponents, setListComponents] = useState([]);
    const [loading, setLoading] = useState(false);  
    const listRef = useRef(listComponents);

    useEffect(() => {
        if (user.vehicles != undefined) {
            const components = user.vehicles.map((item, index) => {
                return {
                    'id': index,
                    'name': item.name,
                    'plate': item.plate,
                    'component': <Item id={index} vehicle={{'id': index, ...item}} canRemove={index} updateItem={updateItem} removeItem={removeItem}/>
                }
            })
            listRef.current = components
            setListComponents(components)
        }
    }, [user])

    const addItem = () => {
        const newId = listComponents.length ? listComponents.slice(-1)[0]['id'] + 1 || 0 : 0
        const newItem = {
            'id': newId, 
            'name': '',
            'plate': '',
            'component': <Item id={newId} vehicle={{'id': newId, 'name': '', 'plate': ''}} canRemove={newId} updateItem={updateItem} removeItem={removeItem}/>
        }
        setListComponents(prevArray => [...prevArray, newItem])
        listRef.current = [...listComponents, newItem]
    }

    const updateItem = (id, name, plate) => {
        const index = listRef.current.findIndex(x => x.id == id);
        const item = listRef.current[index];
        item.name = name;
        item.plate = plate;
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

    const saveVehicles = () => {
        setLoading(true);
        const data = {
            email: user.email, 
            vehicles: listComponents.map(x => { 
                return { 'name': x.name, 'plate': x.plate}
            })
        }
        userApi
            .put('updateVehicles', data)
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
                    <Text style={styles.title}>vehicles</Text>
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
                            saveVehicles()
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

export default Vehicles;
