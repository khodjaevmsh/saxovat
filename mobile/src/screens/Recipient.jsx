import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'
import mehribonlikUylari from '../data/mehribonlikUylari.json'
import muhtojKishilar from '../data/muhtojKishilar.json'

export default function Recipient({ route }) {
    const { setFieldValue } = route.params
    const navigation = useNavigation()
    const cards = [
        {
            icon: <Icon.Home style={{ color: 'white' }} />,
            backgroundColor: '#D4F5E9',
            iconColor: ['#25C685', 'rgba(61, 213, 152, 0.5)'],
            text: 'Mehribonlik uylari',
            description: `${mehribonlikUylari.length} ta mehribonlik uyi`,
            to: 'ToWhomDetail',
        },
        {
            icon: <Icon.DollarSign style={{ color: 'white' }} />,
            backgroundColor: '#FEF3D9',
            iconColor: ['#FFBC25', 'rgba(255, 197, 66, 0.5)'],
            text: 'Xayriya fondlari',
            description: '22 ta xayriya fondi',
            to: 'ToWhomDetail',
        },
        {
            icon: <Icon.User style={{ color: 'white' }} />,
            backgroundColor: '#FFE5E7',
            iconColor: ['#FF464F', 'rgba(255, 87, 95, 0.5)'],
            text: 'Muhtoj kishilar',
            description: `${muhtojKishilar.length} nafar`,
            to: 'NeedyPeople',
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kimga</Text>
            <Text style={styles.subTitle}>qabul qiluvchini tanlang</Text>

            <View style={{ display: 'flex' }}>
                {cards.map((item) => (
                    <TouchableOpacity
                        key={item.text}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(item.to, { setFieldValue })}>
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
    title: {
        fontSize: n(42),
        fontWeight: 'bold',
        color: colors.dark_swampy,
    },
    subTitle: {
        fontSize: n(24),
        fontWeight: '400',
        marginBottom: n(20),
        color: colors.light_gray,
    },
    container: {
        marginHorizontal: n(20),
    },
    text: {
        paddingHorizontal: n(20),
        display: 'flex',
        justifyContent: 'center',
    },
    iconHome: {
        color: 'white',
        borderRadius: n(12),
        width: n(65),
        height: n(63),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRight: {
        borderRadius: n(50),
        width: n(50),
        height: n(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        padding: n(20),
        borderRadius: n(25),
        justifyContent: 'flex-start',
        marginBottom: n(15),
    },
})
