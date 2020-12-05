import React from 'react'
import { View } from 'react-native'
import * as Icon from 'react-native-feather'
import { RedCard, YellowCard, GreenCard } from './Svgs'

export default function MainCards() {
    return (
        <View>
            <View>
                <RedCard width="100%" />
                <Icon.Truck />
            </View>

            <View>
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
