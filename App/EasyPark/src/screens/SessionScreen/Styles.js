
import { StyleSheet } from 'react-native';
import { colors } from './../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%'
    }
})

export default styles;
