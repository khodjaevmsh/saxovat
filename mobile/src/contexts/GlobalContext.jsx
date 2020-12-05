import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [headerOptions, setHeaderOptions] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('token').then((value) => {
            setToken(value)
            return AsyncStorage.getItem('user')
        }).then((value) => {
            setUser(JSON.parse(value))
            setIsLoaded(true)
        })
    }, [])

    async function auth(newToken, newUser) {
        setToken(newToken)
        setUser(newUser)
        await AsyncStorage.setItem('token', newToken)
        await AsyncStorage.setItem('user', JSON.stringify(newUser))
    }

    async function signOut() {
        setToken(null)
        setUser({})
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user')
    }

    return (
        <GlobalContext.Provider value={{ token, user, auth, signOut, headerOptions, setHeaderOptions }}>
            {isLoaded ? children : null}
        </GlobalContext.Provider>
    )
}
