/* eslint-disable no-unused-vars */
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import React, { useRef, useEffect, useState } from 'react'
import PageHeader from '../../commons/PageHeader'
import { collectAll, store } from '../../utils/helpers/functions/controllers'

const Config = () => {

    const [state, setState] = useState({})
    const [settings, setSettings] = useState([])

    const handleChange = e => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name] : value
        })
    }

    const details = txt => {
        const arrs = txt.split(", ")
        const choosers = []

        arrs.forEach(el => {
            const inner = el.split('|')
            const ams = {
                value: inner[0],
                label: inner[1]
            }

            choosers.push(ams)
        })

        return choosers
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            state
        }

        store('portal/configuration', data)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        const vals = {}
        settings.forEach(el => {
            vals[el.key] = el.value
        })
        setState(vals)
    }, [settings])

    useEffect(() => {
        try {
            collectAll('settings')
            .then(res => setSettings(res.data.data))
            .catch(err => console.log(err.message))
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log(state)

    return (
        <>
            <PageHeader pageName="Portal Configuration" gutterBottom={20} />

            <form onSubmit={handleSubmit}>
                {settings.length > 0 && settings.map((conf, i) => (
                    <div key={i}>
                        {conf.input_type === 'textfield' && (
                            <TextField 
                                variant="outlined"
                                label={conf.display_name}
                                name={conf.key}
                                value={state[conf.key]}
                                onChange={handleChange}
                                style={{ marginBottom: 20 }}
                                fullWidth
                                required
                            />
                        )}
                        {conf.input_type === 'textarea' && (
                            <TextField 
                                variant="outlined"
                                label={conf.display_name}
                                name={conf.key}
                                value={state[conf.key]}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                style={{ marginBottom: 20 }}
                                fullWidth
                                required
                            />
                        )}

                        {conf.input_type === 'number' && (
                            <TextField 
                                variant="outlined"
                                type="number"
                                label={conf.display_name}
                                name={conf.key}
                                value={state[conf.key]}
                                onChange={handleChange}
                                style={{ marginBottom: 20 }}
                                fullWidth
                                required
                            />
                        )}

                        {conf.input_type === 'select' && (
                            <FormControl
                                variant="outlined"
                                style={{ width: '100%', marginBottom: 20 }}
                                required
                            >
                                <InputLabel>{conf.display_name}</InputLabel>
                                <Select
                                    label={conf.display_name}
                                    name={conf.key}
                                    value={state[conf.key]}
                                    onChange={handleChange}
                                >
                                    <MenuItem><em>Select {conf.display_name}</em></MenuItem>
                                    {details(conf.details).map((det, index) => (<MenuItem key={index} value={det.value}><em>{det.label}</em></MenuItem>))}
                                </Select>
                            </FormControl>
                        )}
                    </div>
                ))}

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </>
    )
}

export default Config
