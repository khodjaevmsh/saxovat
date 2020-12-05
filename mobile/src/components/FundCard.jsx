import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

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
        width: 100,
        height: 100,
        borderRadius: 16,
        marginRight: 16,
    },
    image: {
        width: 70,
        height: 70,
        margin: 15,
    },
})
