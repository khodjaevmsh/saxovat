import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import MainCards from '../components/MainCards'
import Foundations from '../components/Foundations'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'

export default function MainScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: n(20) }}>
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
        backgroundColor: 'white',
        paddingHorizontal: n(28),
        paddingTop: n(24),
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
    },
})
