import { StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        borderRadius: 10,
        backgroundColor: Colors.primary,
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 250
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        paddingLeft: 10,
        flex: 1
    }
})

export default styles
