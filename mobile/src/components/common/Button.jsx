import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { colors } from '../../utils/colors'

export default function Button({
    onPress,
    color = colors.swampy,
    style,
    loading,
    textStyle,
    title,
    icon,
    iconRight,
    label,
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: color, ...style }}>
                {loading ? <ActivityIndicator /> : (
                    <View style={styles.icon}>
                        {icon ? <View>{icon}</View> : null}

                        <Text style={{ ...styles.text, ...textStyle, marginLeft: 10 }}>
                            {title}
                        </Text>

                        {iconRight ? <View style={styles.iconRight}>{iconRight}</View> : null}
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        letterSpacing: 0.5,
        color: colors.dark_swampy,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: 66,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    iconRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
})
