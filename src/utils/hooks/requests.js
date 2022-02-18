/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import { collectAll } from '../helpers/functions/controllers'

export const useGetter = request => {
    const req = collectAll(request && request.entity)
    const [response, setResponse] = useState([])

    useEffect(() => {
        if (req) {
            req.then(res => {
                if (res.data !== '') {
                    setResponse(res.data.data)
                } else {
                    setResponse([])
                }
            })
            .catch(err => console.log(err.message))
        } else {
            setResponse([])
        }
    }, [])

    return response
}

export const usePoster = ({ request }) => {
    // { entity, body } = request
}
