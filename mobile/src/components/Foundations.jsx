import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FundCard from './FundCard'
import Scroll from './common/Scroll'
import { colors } from '../utils/colors'
import fund1 from '../assets/fund1.jpg'
import fund2 from '../assets/fund2.jpg'
import fund3 from '../assets/fund3.jpg'

export default function Foundations() {
    const foundations = [
        { image: fund1 },
        { image: fund2 },
        { image: fund3 },
        { image: fund1 },
        { image: fund2 },
        { image: fund3 },
    ]

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
        paddingVertical: 20,
        backgroundColor: colors.grey,
    },
    label: {
        paddingHorizontal: 28,
        color: colors.swampy,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
})
