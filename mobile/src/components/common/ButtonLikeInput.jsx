import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Icon from 'react-native-feather'
import Button from './Button'

export default function ButtonLikeInput({ title, onPress, styleText, error, label }) {
    return (
        <View>
            <Button
                title={title}
                label={label}
                iconRight={<Icon.ChevronRight color="black" />}
                onPress={onPress}
                style={error ? {
                    paddingHorizontal: 20,
                    alignItems: 'flex-start',
                    backgroundColor: '#F0F0F0',
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: 'red',
                    borderStyle: 'solid',
                } : { ...styles.button }}
                textStyle={{ ...styles.text, ...styleText }} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        borderColor: '#223263',
    },
    text: {
        fontSize: 17,
    },
})
