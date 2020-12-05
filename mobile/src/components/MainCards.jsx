import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Icon from 'react-native-feather'
import { RedCard, YellowCard, GreenCard } from './Svgs'
import { colors } from '../utils/colors'

export default function MainCards() {
    return (
        <View style={styles.wrapper}>
            <View>
                <RedCard width="100%" />
                <Icon icon={Icon.Truck} />
            </View>
            <View style={styles.flex}>
                <View>
                    <YellowCard />
                </View>
                <View>
                    <GreenCard />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
})
