
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        margin: '5%',
        borderRadius: 20,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        margin: '7%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    },
    input: {
        borderBottomWidth: 3,
        borderBottomColor: colors.blue,
        width: '100%',
        color: colors.blue,
        fontWeight: 'bold',
        
    },
    expirationCVVcontainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.orange
    },
    removeContainer: {
        marginTop: 20,
        marginLeft: 5
    },
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    saveContainer: {
        alignSelf: 'flex-end',
        marginRight: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    text: {
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    },
    itemContainer: {
        marginBottom: 20
    },
    checkboxContainer: {
        marginTop: 20,
        marginRight: 10,
        width: '5%'
    }
});

export default styles;
