import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Field } from 'formik'

export default function TextArea({
    label,
    name,
    validate,
    keyboard,
    style,
    placeholder,
    placeholderTextColor,
    numberOfLines,
    multiline,
    maxLength,
    attributes,
}) {
    return (
        <View>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={{ ...styles.textArea, ...style }}
                            keyboardType={keyboard}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            placeholderTextColor={placeholderTextColor}
                            numberOfLines={numberOfLines}
                            multiline={multiline}
                            onChangeText={(text) => form.setFieldValue(name, text)}
                            value={String(field.value || '')}
                            {...attributes} />
                    </View>
                )}
            </Field>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    textAreaContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 25,
        paddingRight: 20,
        borderRadius: 15,
        backgroundColor: '#F0F0F0',
    },
    textArea: {
        width: '100%',
        minHeight: 125,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        color: '#686866',
        fontSize: 17,
    },
})
