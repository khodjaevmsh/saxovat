import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { LineDot, Dot } from '../Svgs'

export default function Scroll({
    items,
    renderItem,
    horizontal = false,
    paging = false,
    interval = 100,
    classes,
    scrollOff,
    horizontalScrollIndicator = false,
}) {
    const [active, setActive] = useState(0)

    function change({ nativeEvent }) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== active) {
            setActive(slide)
        }
    }

    return (
        <View>
            <ScrollView
                horizontal={horizontal}
                pagingEnabled={paging}
                snapToInterval={interval}
                contentContainerStyle={{ paddingHorizontal: 28, ...classes }}
                onScroll={change}
                scrollEventThrottle={300}
                showsHorizontalScrollIndicator={horizontalScrollIndicator}>
                {items.map(renderItem)}
            </ScrollView>
            {scrollOff ? null : (
                <View style={styles.pagination}>
                    {items.map((item, index) => (
                        <View key={index}>
                            {index === active ? <LineDot style={styles.obj} /> : <Dot style={styles.obj} />}
                        </View>
                    ))}

                    {items.length === active ? <LineDot style={styles.obj} /> : <Dot style={styles.obj} />}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    obj: {
        marginHorizontal: 2,
    },
})
