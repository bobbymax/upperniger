/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { 
    Drawer, 
    Typography, 
    Grid,
    TextField,
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    ButtonGroup, 
    Button 
} from '@material-ui/core'
import PageHeader from '../../commons/PageHeader'
import TableData from '../../commons/TableData'
import { useStyles } from '../../theme/styles'
import { alter, collectAll, destroy, store } from '../../utils/helpers/functions/controllers'

const SubBudgetHeads = () => {

    const initialState = {
        id: 0,
        budget_head_id: 0,
        department_id: 0,
        code: "",
        name: "",
        description: "",
        type: ""
    }

    const classes = useStyles()
    const [state, setState] = useState(initialState)
    const [subBudgetHeads, setSubBudgetHeads] = useState([])
    const [budgetHeads, setBudgetHeads] = useState([])
    const [departments, setDepartments] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [update, setUpdate] = useState(false)


    const columns = [
        {name: 'Code', label: 'code'},
        {name: 'Name', label: 'name'},
        {name: 'Budget Head', label: 'budget_head_id'},
        {name: 'Department', label: 'department_id'},
        {name: 'Type', label: 'type'}
    ]

    const handleUpdate = data => {
        setUpdate(true)
        setOpenModal(true)

        setState({
            ...state,
            id: data.id,
            budget_head_id: data.budget_head_id,
            department_id: data.department_id,
            name: data.name,
            code: data.code,
            description: data.description,
            type: data.type
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            budget_head_id: state.budget_head_id,
            department_id: state.department_id,
            code: state.code,
            name: state.name,
            description: state.description,
            type: state.type
        }

        if (update) {
            alter('subBudgetHeads', state.id, data)
            .then(res => {
                setSubBudgetHeads(subBudgetHeads.map(subBudgetHead => {
                    if(subBudgetHead.id === res.data.data.id) {
                        return res.data.data
                    }

                    return subBudgetHead
                }))
                setState({
                    id: 0,
                    budget_head_id: 0,
                    department_id: 0,
                    code: "",
                    name: "",
                    description: "",
                    type: ""
                })
                setOpenModal(false)
                setUpdate(false)
            })
            .catch(err => console.log(err.message))
        } else {
            store('subBudgetHeads', data)
            .then(res => {
                setSubBudgetHeads([res.data.data, ...subBudgetHeads])
                setState({
                    id: 0,
                    budget_head_id: 0,
                    department_id: 0,
                    code: "",
                    name: "",
                    description: "",
                    type: ""
                })
                setOpenModal(false)
            })
            .catch(err => console.log(err.message))
        }
    }

    const handleDrawer = () => {
        setOpenModal(! openModal)
    }

    const handleDelete = id => {
        destroy('subBudgetHeads', state.id)
        .then(res => {
            setSubBudgetHeads(subBudgetHeads.filter(subBudgetHead => subBudgetHead.id !== res.data.data.id))
            setState({
                id: 0,
                budget_head_id: 0,
                department_id: 0,
                code: "",
                name: "",
                description: "",
                type: ""
            })
            setOpenModal(false)
            setUpdate(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        collectAll('subBudgetHeads')
        .then(res => {
            setSubBudgetHeads(res.data.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    useEffect(() => {
        collectAll('budgetHeads')
        .then(res => {
            setBudgetHeads(res.data.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    useEffect(() => {
        collectAll('departments')
        .then(res => {
            setDepartments(res.data.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <PageHeader 
                pageName="Sub Budget Heads" 
                gutterBottom={20} 
                addBttn
                addBttnAction={handleDrawer} 
            />

            <div className={classes.contentContainer} style={{ height: '100%'}}>
                <TableData 
                    columns={columns}
                    rows={subBudgetHeads}
                    callToAction={handleUpdate}
                />
            </div>

            <Drawer
                anchor="right"
                classes={{ paper: classes.drawerModal }}
                open={openModal}
            >
                <div className={classes.sideDrawerContainer}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    style={{ marginBottom: 40 }}
                                >
                                    {update ? 'Update' : 'Create' } Sub Budget Head
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Code"
                                    value={state.code}
                                    onChange={e => setState({...state, code: e.target.value})}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Name"
                                    value={state.name}
                                    onChange={e => setState({...state, name: e.target.value})}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <FormControl
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                >
                                    <InputLabel>Budget Head</InputLabel>
                                    <Select
                                        label="Budget Head"
                                        value={state.budget_head_id}
                                        onChange={e => setState({...state, budget_head_id: e.target.value})}
                                    >
                                        <MenuItem value={0}><em>Select Budget Head</em></MenuItem>
                                        {budgetHeads.map(budgetHead => (
                                            <MenuItem 
                                                key={budgetHead.id} 
                                                value={budgetHead.id}
                                            >
                                                <em>{budgetHead.name}</em>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <FormControl
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                >
                                    <InputLabel>Department</InputLabel>
                                    <Select
                                        label="Department"
                                        value={state.department_id}
                                        onChange={e => setState({...state, department_id: e.target.value})}
                                    >
                                        <MenuItem value={0}><em>Select Department</em></MenuItem>
                                        {departments.map(dept => (
                                            <MenuItem key={dept.id} value={dept.id}><em>{dept.name}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <FormControl
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                >
                                    <InputLabel>Type</InputLabel>
                                    <Select
                                        label="Type"
                                        value={state.type}
                                        onChange={e => setState({...state, type: e.target.value})}
                                    >
                                        <MenuItem value=""><em>Select Staff Type</em></MenuItem>
                                        {["Capital", "Overhead", "Personnel"].map((emTyp, index) => (
                                            <MenuItem key={index} value={emTyp.toLowerCase()}><em>{emTyp}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <ButtonGroup variant="contained">
                                    <Button 
                                        type="submit" 
                                        color="primary"
                                    >
                                        {update ? 'Update' : 'Submit'}
                                    </Button>
                                    <Button 
                                        color="secondary"
                                        onClick={() => {
                                            setState({
                                                id: 0,
                                                budget_head_id: 0,
                                                department_id: 0,
                                                code: "",
                                                name: "",
                                                description: "",
                                                type: ""
                                            })
                                            setUpdate(false)
                                            setOpenModal(false)
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    {update ? 
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleDelete(state.id)}
                                        >
                                            Delete
                                        </Button>
                                    : null}
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Drawer>
        </>
    )
}

export default SubBudgetHeads
