import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import MainCards from '../components/MainCards'
import Foundations from '../components/Foundations'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'

export default function MainScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.wrapper}>
                <Text style={styles.mainTitle}>Saxovat!</Text>
                <Text style={styles.mainSubtitle}>xayriya turini belgilang</Text>

                <MainCards />
            </View>

            <Foundations />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: n(28),
        paddingTop: n(40),
    },
    mainTitle: {
        color: colors.dark_swampy,
        fontSize: n(38),
        fontWeight: '700',
    },
    mainSubtitle: {
        color: colors.gray,
        fontSize: n(22),
        fontWeight: '400',
        marginBottom: n(10),
    },
})
