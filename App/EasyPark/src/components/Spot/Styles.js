
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors'

const styles = StyleSheet.create({
    spot: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.blue,
        width: 40,
        height: 60,
        margin: 1
    },
    occupied: {
        backgroundColor: colors.red
    },
    notOccupied: {
        backgroundColor: colors.white
    },
    emptyIcon: {
        margin: 10
    },
    text: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 16,
    },
    rowContainer: {
        margin:20
    },
    columnContainer: {
        flex:1,
        flexDirection:'row', 
        margin:10
    }
});

export default styles;
