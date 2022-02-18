/* eslint-disable react-hooks/exhaustive-deps */
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStyles } from '../../theme/styles'

const Navigation = ({label, icon, path, open, component}) => {

    const classes = useStyles()
    const [active, setActive] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (path === '/logout') {
            setActive(true)
        }

        setActive(location.pathname === path)
    }, [location])

    return (
        <>
            <ListItem
                button
                component={Link}
                to={path}
                className={clsx(classes.menuItem, active && classes.menuItemActive)}
            >
                <ListItemIcon>
                    <IconButton 
                        className={clsx(active && classes.menuListIcon, active && classes.menuListIconActive)}
                    >
                        {icon}
                    </IconButton>
                </ListItemIcon>
                <ListItemText 
                    className={clsx(!open && classes.navigationTextSmall)} 
                    primary={label} 
                    primaryTypographyProps={{ variant: 'body2' }} 
                />
            </ListItem>
        </>
    )
}

export default Navigation
