import {useEffect, useState} from 'react'
import { useToken } from './useToken'

export const useUser = () => {
    const [token] = useToken()

    const getPayloadFromToekn = fetchedToken => {
        const encodedPayload = JSON.parse(fetchedToken)
        return encodedPayload.user
    }

    const [user, setUser] = useState(() => {
        if (!token) return null
        return getPayloadFromToekn(token)
    })

    useEffect(() => {
        if (!token) {
            setUser(null)
        } else {
            setUser(getPayloadFromToekn(token))
        }
    }, [token])

    return user
}