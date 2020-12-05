import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import MainCards from '../components/MainCards'
import Foundations from '../components/Foundations'
import { colors } from '../utils/colors'

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
        backgroundColor: 'white',
        paddingHorizontal: 28,
        paddingTop: 12,
    },
    mainTitle: {
        color: colors.swampy,
        fontSize: 42,
        fontWeight: '700',
    },
    mainSubtitle: {
        color: colors.gray,
        fontSize: 24,
        fontWeight: '400',
    },
})
