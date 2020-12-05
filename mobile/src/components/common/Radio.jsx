import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Field } from 'formik'

export default function Radio({ name, items }) {
    return (
        <Field name={name}>
            {({ form }) => (
                <View style={styles.container}>
                    {items.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.block}
                            activeOpacity={0.5}
                            onPress={() => form.setFieldValue(name, item.value)}>
                            <View style={styles.button}>
                                {form.values[name] === item.value ? <View style={styles.buttonActive} /> : null}
                            </View>
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </Field>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    block: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        height: 26,
        backgroundColor: '#F0F0F0',
        borderRadius: 50,
    },
    buttonActive: {
        width: 26,
        height: 26,
        borderStyle: 'solid',
        borderWidth: 9,
        borderColor: '#223263',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 16,
        marginLeft: 9,
    },
})
