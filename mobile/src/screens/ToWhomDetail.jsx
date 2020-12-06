import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'
import mehribonlikUylari from '../data/mehribonlikUylari.json'

export default function ToWhomDetail() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.wrapper}>
                <Text style={styles.mainTitle}>Mehribonlik uylari</Text>
                <Text style={styles.mainSubtitle}>qabul qiluvchini tanlang</Text>
                {mehribonlikUylari.map((house) => (
                    <TouchableOpacity opacity={0.7}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{house.G1}</Text>
                            <Icon.ChevronRight color="black" width={n(60)} height={n(30)} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingHorizontal: n(28),
        paddingTop: n(12),
    },
    mainTitle: {
        fontSize: n(38),
        fontWeight: '700',
        color: colors.swampy,
    },
    cardTitle: {
        fontSize: n(15),
        paddingHorizontal: n(25),
    },
    cardSubTitle: {
        fontSize: n(15),
        paddingHorizontal: n(25),
    },
    mainSubtitle: {
        fontSize: n(24),
        fontWeight: '400',
        color: colors.gray,
        marginBottom: n(30),
    },
    card: {
        width: '100%',
        height: n(70),
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: n(15),
        marginBottom: n(15),
    },
})
