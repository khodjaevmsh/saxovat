import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Field } from 'formik'
import { n } from '../../utils/normalize'

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
        marginVertical: n(3),
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: n(26),
        height: n(26),
        backgroundColor: '#F0F0F0',
        borderRadius: n(50),
    },
    buttonActive: {
        width: n(26),
        height: n(26),
        borderStyle: 'solid',
        borderWidth: n(9),
        borderColor: '#223263',
        borderRadius: n(50),
    },
    buttonText: {
        fontSize: n(16),
        marginLeft: n(9),
    },
})
