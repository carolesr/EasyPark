
import { StyleSheet } from 'react-native';
import { colors } from './../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        margin: '5%',
        borderRadius: 20,
        backgroundColor: colors.white,
    },
    container: {
        height: '100%',
        alignItems: 'center'
    },
    textContainer: {
        
    },
    text: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 30
    },
    title: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 10
    },
})

export default styles;
