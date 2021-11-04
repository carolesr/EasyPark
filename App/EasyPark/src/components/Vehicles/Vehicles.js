import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles'
import Item from './Item'
import { colors } from '../../assets/colors'

const Vehicles = props => {
    
    const [vehicles, setVehicles] = useState([])
    const [listComponents, setListComponents] = useState([])
    
    const listRef = useRef(listComponents);

    useEffect(() => {
        if (props.user.vehicles != undefined) {
            setVehicles(props.user.vehicles)
        }
    }, [props]);

    useEffect(() => {
        const components = vehicles.map((item, index) => {
            return {
                'id': index,
                'component': <Item id={index} vehicle={item} canRemove={index} removeItem={removeItem}/>
            }
        })
        listRef.current = components
        setListComponents(components)
    }, [vehicles])

    const removeItem = id => {
        const newList = listRef.current.filter(x => x.id != id);
        setListComponents(newList);
        listRef.current = newList
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
                            const lastId = listComponents.slice(-1)[0]['id'] || 0
                            const newItem = {
                                'id': lastId+1, 
                                'component': <Item id={lastId+1} vehicle={{}} canRemove={true} removeItem={removeItem}/>
                            }
                            setListComponents(prevArray => [...prevArray, newItem])
                            listRef.current = [...listComponents, newItem]
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

export default Vehicles;
