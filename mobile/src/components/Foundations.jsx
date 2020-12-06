import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FundCard from './FundCard'
import Scroll from './common/Scroll'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'
import foundations from '../data/foundationsImage'

export default function Foundations() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>Xayriya fondlari</Text>

            <Scroll
                items={foundations}
                horizontal
                classes={{ paddingRight: 0 }}
                scrollOff
                renderItem={(item, index) => (
                    <FundCard fund={item} key={index} />
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: n(20),
        backgroundColor: colors.grey,
    },
    label: {
        paddingHorizontal: n(28),
        color: colors.swampy,
        fontSize: n(18),
        fontWeight: 'bold',
        marginBottom: n(16),
    },
})
