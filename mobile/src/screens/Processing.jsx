import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../components/common/Button'
import { Time } from '../components/Svgs'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'

export default function Processing() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.mainTitle}>Ma'lumot uchun rahmat )</Text>
                <Text style={styles.mainSubtitle}>Ma'lumotingiz tekshirilgandan so'ng dasturga qo'shiladi</Text>
            </View>
            <Time width="100%" height="250" />

            <Button title="Bosh sahifaga" onPress={() => navigation.navigate('MainTab')} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        marginBottom: 20,
        color: colors.gray,
        fontSize: n(22),
        fontWeight: '400',
    },
})
