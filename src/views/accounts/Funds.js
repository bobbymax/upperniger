import React, {useEffect, useState} from 'react'
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
import { collectAll, destroy, store, alter } from '../../utils/helpers/functions/controllers'

const Funds = () => {

    const initialState = {
        id: 0,
        sub_budget_head_id: 0,
        approved_amount: 0,
        description: "",
        actual_balance: 0,
        funded: 0
    }

    const classes = useStyles()
    const [state, setState] = useState(initialState)
    const [subBudgetHeads, setSubBudgetHeads] = useState([])
    const [funds, setFunds] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [update, setUpdate] = useState(false)

    const columns = [
        {name: 'Sub Budget Head', label: 'sub_budget_head_id'},
        {name: 'Description', label: 'description'},
        {name: 'Approved Amount', label: 'approved_amount'}
    ]

    const handleDrawer = () => {
        setOpenModal(! openModal)
    }

    const handleUpdate = data => {
        setUpdate(true)
        setOpenModal(true)

        setState({
            ...state,
            id: data.id,
            sub_budget_head_id: data.sub_budget_head_id,
            approved_amount: data.approved_amount,
            description: data.description,
            actual_balance: data.actual_balance,
            funded: data.funded
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            sub_budget_head_id: state.sub_budget_head_id,
            approved_amount: state.approved_amount,
            description: state.description
        }

        if (update) {
            alter('funds', state.id, data)
            .then(res => {
                setFunds(funds.map(fund => {
                    if(fund.id === res.data.data.id) {
                        return res.data.data
                    }

                    return fund
                }))
                setState({
                    id: 0,
                    sub_budget_head_id: 0,
                    approved_amount: 0,
                    description: "",
                    actual_balance: 0,
                    funded: 0
                })
                setOpenModal(false)
                setUpdate(false)
            })
            .catch(err => console.log(err.message))
        } else {
            store('funds', data)
            .then(res => {
                setFunds([res.data.data, ...funds])
                setState({
                    id: 0,
                    sub_budget_head_id: 0,
                    approved_amount: 0,
                    description: "",
                    actual_balance: 0,
                    funded: 0
                })
                setOpenModal(false)
            })
            .catch(err => console.log(err.message))
        }
    }

    const handleDelete = id => {
        destroy('funds', state.id)
        .then(res => {
            setFunds(funds.filter(fund => fund.id !== res.data.data.id))
            setState({
                id: 0,
                sub_budget_head_id: 0,
                approved_amount: 0,
                description: "",
                actual_balance: 0,
                funded: 0
            })
            setOpenModal(false)
            setUpdate(false)
        })
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        let value = e.target.value
        setState({...state, sub_budget_head_id: value })
        // fetchSubBudgetHead(value)
    }

    useEffect(() => {
        collectAll('funds')
        .then(res => {
            if (res.data !== '') {
                setFunds(res.data.data)
            } else {
                setFunds([])
            }
        })
        .catch(err => console.log(err.message))
    }, [])

    useEffect(() => {
        collectAll('subBudgetHeads')
        .then(res => {
            if (res.data !== '') {
                setSubBudgetHeads(res.data.data)
            } else {
                setSubBudgetHeads([])
            }
        })
        .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <PageHeader 
                pageName="Funds" 
                gutterBottom={20} 
                addBttn
                addBttnAction={handleDrawer}
            />  

            <div className={classes.contentContainer} style={{ height: '100%'}}>
                <TableData 
                    columns={columns}
                    rows={funds}
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

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <FormControl
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                >
                                    <InputLabel>Sub Budget Head</InputLabel>
                                    <Select
                                        label="Sub Budget Head"
                                        value={state.sub_budget_head_id}
                                        // onChange={e => {
                                        //     setState({ ...state, sub_budget_head_id: e.target.value })
                                        //     fetchSubBudgetHead(e.target.value)
                                        // }}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}><em>Select Sub Budget Head</em></MenuItem>
                                        {subBudgetHeads.map(subBudgetHead => (
                                            <MenuItem 
                                                key={subBudgetHead.id} 
                                                value={subBudgetHead.id}
                                            >
                                                <em>{subBudgetHead.name}</em>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Description"
                                    value={state.description}
                                    onChange={e => setState({...state, description: e.target.value})}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Approved Amount"
                                    value={state.approved_amount}
                                    onChange={e => setState({...state, approved_amount: e.target.value})}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Available Balance"
                                    value={state.actual_balance}
                                    onChange={e => setState({...state, actual_balance: e.target.value})}
                                    disabled
                                    fullWidth
                                    required
                                />
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
                                                sub_budget_head_id: 0,
                                                approved_amount: 0,
                                                description: "",
                                                actual_balance: 0,
                                                funded: 0
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

export default Funds
