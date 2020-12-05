import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { n } from '../utils/normalize'

export default function FundCard({ fund }) {
    return (
        <View style={styles.block}>
            <Image style={styles.image} source={fund.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        width: n(100),
        height: n(100),
        borderRadius: n(16),
        marginRight: n(16),
    },
    image: {
        width: n(70),
        height: n(70),
        margin: n(15),
    },
})
