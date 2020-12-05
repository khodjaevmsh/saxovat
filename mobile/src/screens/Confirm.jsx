import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView,
    Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utils/colors'
import InputConfirm from '../components/common/InputConfirm'
import { usePostRequest } from '../hooks/request'
import { CONFIRM } from '../urls'
import ServerError from '../components/common/ServerError'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Confirm({ route }) {
    const [serverError, setServerError] = useState('')
    const navigation = useNavigation()
    const { auth } = useContext(GlobalContext)
    const { phone } = route.params
    const signIn = usePostRequest({ url: CONFIRM, headers: {} })

    async function onSubmit(data) {
        setServerError('')

        const { error, response } = await signIn.request({
            data: {
                ...data,
                phone,
            },
        })

        if (error) {
            setServerError(error)
        }

        await auth(response.token, response.user)
        navigation.navigate(response.user.firstName.length > 0 ? 'TabScreen' : 'Register')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.wrapper}>
                <KeyboardAvoidingView
                    style={styles.containerAvoidingView}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'none'}
                    keyboardVerticalOffset={80}>
                    <Text style={styles.phone}>Подтверждение</Text>
                    <Text style={styles.text}>
                        Мы отправили сообщение на номер
                        <Text style={styles.sign}> +998 {phone}</Text>
                    </Text>
                    <ServerError error={serverError} fieldOff style={styles.serverError} />
                    <InputConfirm initialValues={phone} loading={signIn.loading} onSubmit={onSubmit} />
                    <Text style={styles.sign} onPress={() => navigation.navigate('Auth')}>
                        Изменить номер?
                    </Text>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerAvoidingView: {
        alignItems: 'center',
    },
    phone: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.PRIMARY,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
        color: colors.DARK_GREY,
    },
    sign: {
        color: colors.PRIMARY,
        textAlign: 'center',
    },
})
