import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native'
import RecipientForm from '../components/RecipientForm'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'

export default function RecipientTab() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: n(20) }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.wrapper}>
                <Text style={styles.mainTitle}>Yordamga muhtoj</Text>
                <Text style={styles.mainSubtitle}>kishilar haqida ma’lumot berish</Text>

                <RecipientForm />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    services: {
        backgroundColor: '#fff',
        borderTopLeftRadius: n(30),
        borderTopRightRadius: n(30),
    },
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
