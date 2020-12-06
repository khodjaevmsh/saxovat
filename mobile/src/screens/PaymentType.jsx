import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import Container from '../components/common/Container'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'
import { Click, Payme } from '../components/Svgs'

export default function PaymentType() {
    const navigation = useNavigation()

    const payment = [
        {
            id: 1,
            image: <Payme width={n(28)} />,
            text: 'Payme',
            color: colors.till,
        },
        {
            id: 2,
            image: <Click width={n(28)} />,
            text: 'Click',
            color: colors.light_blue,
        },
        {
            id: 3,
            image: <Icon.Home color="white" />,
            text: 'Apelsin',
            color: colors.orange,
        },
    ]

    return (
        <Container style={{ flex: 1 }}>
            <Text style={styles.title}>To’lov turi</Text>
            <Text style={styles.subTitle}>to’lov turini tanlang</Text>

            <View>
                {payment.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('MainTab')}>

                        <View style={styles.box}>
                            <View style={[styles.imageHome, { backgroundColor: item.color }]}>
                                {item.image}
                            </View>

                            <View style={styles.body}>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={{ color: colors.light_gray }}>
                *Yuborgan mablag'ingizning 1% loiha rivojlanishi uchun sarflanadi
            </Text>
        </Container>
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
    text: {
        fontSize: n(20),
        fontWeight: '600',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: n(20),
    },
    imageHome: {
        color: 'white',
        borderRadius: n(12),
        width: n(65),
        height: n(63),
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
        backgroundColor: colors.grey,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
})
