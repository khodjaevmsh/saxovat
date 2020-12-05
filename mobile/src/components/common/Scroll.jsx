import React from 'react'
import { ScrollView } from 'react-native'

export default function Scroll({
    items,
    renderItem,
    horizontal = false,
    paging = false,
    interval = 100,
    classes,
    horizontalScrollIndicator = false,
}) {
    return (
        <ScrollView
            horizontal={horizontal}
            pagingEnabled={paging}
            snapToInterval={interval}
            contentContainerStyle={{ paddingHorizontal: 28, ...classes }}
            showsHorizontalScrollIndicator={horizontalScrollIndicator}>
            {items.map(renderItem)}
        </ScrollView>
    )
}
