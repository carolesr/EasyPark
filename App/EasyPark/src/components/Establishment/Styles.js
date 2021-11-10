
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        margin: '5%',
        borderRadius: 20,
        backgroundColor: colors.white
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '7%',
    },
    pricesContanier: {
        marginTop: 5,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.orange
    },
    text: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    smallText: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 2,
    },
    iconContainer: {
        marginTop: 70,
        marginRight: 20
    },
});

export default styles;
