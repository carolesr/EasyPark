
import { StyleSheet } from 'react-native';
import { colors } from './../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: '40%'
    },
    textContainer: {
        alignSelf: 'center',
        marginTop: '10%'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5
    },
    button: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 12,
        paddingBottom: 20,
    }
})

export default styles;
