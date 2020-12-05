import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Field } from 'formik'
import { TextInputMask } from 'react-native-masked-text'

export default function Input({
    label,
    name,
    validate,
    left,
    right,
    style,
    keyboard,
    placeholder,
    text,
    maxLength,
    autoCapitalize,
    wrapperStyle,
    labelStyle,
    editable,
    masked,
    placeholderTextColor,
    ...attributes
}) {
    return (
        <View style={{ ...wrapperStyle }}>
            {label ? <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text> : null}
            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <View style={form.errors[name] ? {
                        borderWidth: 1,
                        borderColor: 'red',
                        borderStyle: 'solid',
                        ...styles.wrapper,
                        ...style,
                    } : { ...styles.wrapper, ...style }}>
                        {left ? <View style={styles.leftBlock}>{left}</View> : null}

                        {masked ? (
                            <TextInputMask
                                options={{
                                    mask: masked === 'phone' ? '(99) 999-9999'
                                        : masked === 'to' ? 'AAA 9999999' : '99 | A 999 AA',
                                }}
                                type={masked === 'phone' ? 'cel-phone' : 'custom'}
                                style={{ ...styles.inputStyle, ...text }}
                                onChangeText={(value) => form.setFieldValue(name, value)}
                                value={String(field.value)}
                                keyboardType={keyboard}
                                placeholder={placeholder}
                                maxLength={maxLength}
                                autoCapitalize={autoCapitalize}
                                editable={editable}
                                placeholderTextColor={placeholderTextColor} />
                        ) : null}

                        {!masked ? (
                            <TextInput
                                style={{ ...styles.inputStyle, ...text }}
                                onChangeText={(value) => form.setFieldValue(name, value)}
                                value={String(field.value)}
                                keyboardType={keyboard}
                                placeholder={placeholder}
                                maxLength={maxLength}
                                autoCapitalize={autoCapitalize}
                                editable={editable}
                                placeholderTextColor={placeholderTextColor}
                                {...attributes} />
                        ) : null}

                        {right ? <View style={styles.rightBlock}>{right}</View> : null}
                    </View>
                )}
            </Field>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    wrapper: {
        height: 66,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingRight: 40,
        borderRadius: 15,
        backgroundColor: '#F0F0F0',
    },
    leftBlock: {
        marginRight: 20,
    },
    inputStyle: {
        width: '100%',
        fontSize: 17,
        color: 'black',
    },
})