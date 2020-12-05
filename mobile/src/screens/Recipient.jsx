import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function Recipient() {
    const navigation = useNavigation()
    const cards = [
        {
            icon: <Icon.Home style={{ color: 'white' }} />,
            backgroundColor: '#D4F5E9',
            iconColor: ['#25C685', 'rgba(61, 213, 152, 0.5)'],
            text: 'Mehribonlik uylari',
            description: '158 ta mehribonlik uyi',
        },
        {
            icon: <Icon.DollarSign style={{ color: 'white' }} />,
            backgroundColor: '#FEF3D9',
            iconColor: ['#FFBC25', 'rgba(255, 197, 66, 0.5)'],
            text: 'Xayriya fondlari',
            description: '22 ta xayriya fondi',
        },
        {
            icon: <Icon.User style={{ color: 'white' }} />,
            backgroundColor: '#FFE5E7',
            iconColor: ['#FF464F', 'rgba(255, 87, 95, 0.5)'],
            text: 'Muhtoj kishilar',
            description: '157 nafar',
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kimga</Text>
            <Text style={{ color: '#96A7AF', marginBottom: 20 }}>qabul qiluvchini tanlang</Text>

            <View style={{ display: 'flex' }}>
                {cards.map((item) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ToWhomDetail')}>
                        <View style={{ ...styles.box, backgroundColor: item.backgroundColor }}>
                            <View style={{ ...styles.iconHome, backgroundColor: item.iconColor[0] }}>
                                {item.icon}
                            </View>

                            <View style={styles.text}>
                                <Text style={{ color: item.iconColor[0] }}>{item.text}</Text>
                                <Text style={{ color: item.iconColor[1] }}>{item.description}</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <View style={{ ...styles.iconRight, backgroundColor: item.iconColor[1] }}>
                                    <Icon.ChevronRight style={{ color: 'white' }} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    text: {
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: '#1A3B34',
    },
    iconHome: {
        color: 'white',
        borderRadius: 12,
        width: 65,
        height: 63,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRight: {
        borderRadius: 50,
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        borderRadius: 25,
        justifyContent: 'flex-start',
        marginBottom: 15,
    },
})
