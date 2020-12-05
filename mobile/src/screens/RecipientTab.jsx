import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native'
import RecipientForm from '../components/RecipientForm'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'

export default function RecipientScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
        paddingHorizontal: 28,
        paddingTop: 24,
    },
    mainTitle: {
        color: colors.swampy,
        fontSize: 38,
        fontWeight: '700',
    },
    mainSubtitle: {
        color: colors.gray,
        fontSize: 22,
        fontWeight: '400',
    },
})
