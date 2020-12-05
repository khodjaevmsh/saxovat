import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { colors } from '../utils/colors'

export default function ToWhomDetail() {
    const shelterHouses = [
        { id: 1, name: 'Mehribonlik uyi №1' },
        { id: 2, name: 'Mehribonlik uyi №2' },
        { id: 3, name: 'Mehribonlik uyi №3' },
        { id: 4, name: 'Mehribonlik uyi №4' },
        { id: 5, name: 'Mehribonlik uyi №5' },
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.wrapper}>
                <Text style={styles.mainTitle}>Mehribonlik uylari</Text>
                <Text style={styles.mainSubtitle}>qabul qiluvchini tanlang</Text>
                {shelterHouses.map((house) => (
                    <TouchableOpacity opacity={0.7}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{house.name}</Text>
                            <Icon.ChevronRight color="black" width={60} height={30} />
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
        paddingHorizontal: 28,
        paddingTop: 12,
    },
    mainTitle: {
        fontSize: 38,
        fontWeight: '700',
        color: colors.swampy,
    },
    cardTitle: {
        fontSize: 15,
        paddingHorizontal: 25,
    },
    cardSubTitle: {
        fontSize: 15,
        paddingHorizontal: 25,
    },
    mainSubtitle: {
        fontSize: 24,
        fontWeight: '400',
        color: colors.gray,
        marginBottom: 30,
    },
    card: {
        width: '100%',
        height: 70,
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 15,
    },
})
