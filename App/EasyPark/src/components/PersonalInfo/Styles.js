
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors'

const styles = StyleSheet.create({
    screen: {
        height: 290,
        margin: '5%',
        borderRadius: 20,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        margin: '7%',
        marginBottom: '4%'
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
    phoneCPFContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.orange
    },
    saveContainer: {
        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 10
    },
    text: {
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginRight: 10
    }
});

export default styles;
