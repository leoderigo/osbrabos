import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FA5Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'
import Colors from '../../../constants/Colors'


const EmptyRoomList = () => {
    return (
        <View style={{ backgroundColor: Colors.white, borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
            <View style={{ width: Dimensions.get('screen').width - 60, padding: 25 }}>
                <Text style={{ textAlign: 'center', fontSize: 22 }}>Você não tem nenhuma atividade marcada</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CRIAR</Text>
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#ffffff', padding: 5 }}> */}
                        <IonIcon name='add-circle' size={styles.buttonText.fontSize + 15} color={Colors.white} style={{ marginVertical: -1 }} />
                    {/* </View> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>PROCURAR</Text>
                    <View style={{ borderRadius: 15, backgroundColor: '#ffffff', padding: 5 }}>
                        <IonIcon name='search' size={styles.buttonText.fontSize} color={Colors.primary} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EmptyRoomList
