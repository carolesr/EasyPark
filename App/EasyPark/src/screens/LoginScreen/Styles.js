
import { StyleSheet } from 'react-native';
import { colors } from './../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        margin: 20,
        width: '75%',
        height: '7%',
        borderRadius: 10
    },
    input: {
        width: '100%',
        fontWeight: 'bold',
        marginLeft: 10,
        color: colors.blue
    },
    textContainer: {
        alignSelf: 'center',
    },
    registerContainer: {
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '20%'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5
    },
    textSmall: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '50%',
        maxHeight: '30%',
        marginBottom: '5%'
    },
})

export default styles;
