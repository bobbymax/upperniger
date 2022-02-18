import React, { useState, useEffect } from 'react'
import { 
    Card, 
    CardActions, 
    Drawer, 
    Grid, 
    IconButton, 
    Typography, 
    TextField, 
    ButtonGroup, 
    Button 
} from '@material-ui/core'
import OrbCardComponent from '../../components/OrbCardComponent'
import { 
    collectAll, 
    store, 
    alter, 
    destroy 
} from '../../utils/helpers/functions/controllers'
import { Add } from '@material-ui/icons'
import clsx from 'clsx'
import { useStyles } from '../../theme/styles'
import PageHeader from '../../commons/PageHeader'

const BudgetHeads = () => {

    const initialState = {
        id: 0,
        code: "",
        name: "",
        description: ""
    }

    const classes = useStyles()
    const [budgetHeads, setBudgetHeads] = useState([])
    const [state, setState] = useState(initialState)
    const [openModal, setOpenModal] = useState(false)
    const [update, setUpdate] = useState(false)

    const handleUpdate = data => {
        setUpdate(true)
        setOpenModal(true)

        setState({
            ...state,
            id: data.id,
            name: data.name,
            code: data.code,
            description: data.description
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            name: state.name,
            code: state.code,
            description: state.description
        }

        if (update) {
            alter('budgetHeads', state.id, data)
            .then(res => {
                setBudgetHeads(budgetHeads.map(budgetHead => {
                    if(budgetHead.id === res.data.data.id) {
                        return res.data.data
                    }

                    return budgetHead
                }))

                setState({
                    id: 0,
                    name: "",
                    code: "",
                    description: ""
                })

                setOpenModal(false)
                setUpdate(false)
            })
            .catch(err => console.log(err.message))
        } else {
            store('budgetHeads', data)
            .then(res => {
                setBudgetHeads([res.data.data, ...budgetHeads])
                setState({
                    id: 0,
                    name: "",
                    code: "",
                    description: ""
                })
                setOpenModal(false)
            })
            .catch(err => console.log(err.message))
        }
    }

    const handleDelete = id => {
        destroy('budgetHeads', state.id)
        .then(res => {
            setBudgetHeads(budgetHeads.filter(budgetHead => budgetHead.id !== res.data.data.id))
            setState({
                id: 0,
                code: "",
                name: "",
                description: ""
            })
            setOpenModal(false)
            setUpdate(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        collectAll('budgetHeads')
        .then(res => setBudgetHeads(res.data.data))
        .catch(err => console.log(err.message))
    }, [])

    return (
        <>
           <PageHeader pageName="Budget Heads" gutterBottom={20} /> 

           <div className={classes.contentContainer}>
                <Grid container spacing={2}>
                    {budgetHeads.map(budgetHead => (
                        <Grid key={budgetHead.id} item xs={12} sm={12} md={4} lg={3}>
                            <OrbCardComponent 
                                topLevel={budgetHead.code}
                                title={budgetHead.name}
                                subtitle={budgetHead.code}
                                entity={budgetHead}
                                onEdit={handleUpdate}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Card className={clsx(classes.contentCard, classes.addCardContent)}>
                            <CardActions>
                                <IconButton 
                                    className={classes.addCardContentIcon}
                                    onClick={() => setOpenModal(!openModal)}
                                >
                                    <Add fontSize="large" /> 
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
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
                                    {update ? 'Update' : 'Create' } Budget Head
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={3} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Code"
                                    value={state.code}
                                    onChange={e => { setState({...state, code: e.target.value}) }}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={9} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Name"
                                    value={state.name}
                                    onChange={e => { setState({...state, name: e.target.value}) }}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
                                <TextField 
                                    variant="outlined"
                                    label="Description"
                                    value={state.description}
                                    onChange={e => { setState({...state, description: e.target.value}) }}
                                    multiline
                                    rows={5}
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
                                                code: "",
                                                name: "",
                                                description: ""
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

export default BudgetHeads
