/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { canAccessModule, canAccessPage } from '../helpers/functions/access'
import { useUser } from './useUser'

export const useModules = mods => {

    const auth = useUser()

    const getAccessibleModules = () => {
        let accessbile = []

        mods.forEach(mod => {
            if (auth.administrator) {
                accessbile.push(formatModules(mod))
            } else {
                if (mod.type === "page") {
                    if (canAccessModule(mod, auth)) accessbile.push(formatModules(mod))
                } else {
                    if (canAccessPage(mod, auth)) accessbile.push(formatModules(mod))
                }
            }
        })

        return accessbile
    }

    const formatModules = mod => {
        return {
            id: mod.id,
            text: mod.name,
            path: mod.path,
            parent: mod.parentId,
            icon: mod.icon,
            children: mod.children,
            type: mod.type,
            component: mod.component
        }
    }

    const [accessibleModules, setAccessibleModules] = useState(() => {
        if (! auth) return []
        return getAccessibleModules()
    })

    useEffect(() => {
        if (! auth || ! mods) {
            setAccessibleModules([])
        } else {
            setAccessibleModules(getAccessibleModules())
        }
    }, [auth, mods])

    return accessibleModules
}
