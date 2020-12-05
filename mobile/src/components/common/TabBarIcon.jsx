import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../colors'

export default function TabBarIcon({ focused, icon: Icon }) {
    return (
        <View style={focused ? styles.active : null}>
            <Icon color={COLORS.WHITE} style={styles.block} />
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#F18C44',
        borderRadius: 100,
    },
    block: {
        margin: 17,
    },
    greeting: {
        color: '#223263',
        fontSize: 21,
        fontWeight: 'bold',
    },
    name: {
        fontWeight: 'normal',
    },
})
