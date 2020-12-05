import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils/colors'

export default function TabBarIcon({ focused, icon: Icon }) {
    return (
        <View style={focused ? styles.active : null}>
            <Icon color={colors.WHITE} style={styles.block} />
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: colors.yellow,
        borderRadius: 100,
    },
    block: {
        margin: 15,
    },
})
