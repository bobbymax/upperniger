/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
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

const Tags = () => {

    const initialState = {
        id: 0,
        name: ""
    }

    const classes = useStyles()
    const [state, setState] = useState(initialState)
    const [tags, setTags] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [update, setUpdate] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            name: state.name
        }

        if (update) {
            alter('tags', state.id, data)
            .then(res => {
                setTags(tags.map(tag => {
                    if(tag.id === res.data.data.id) {
                        return res.data.data
                    }

                    return tag
                }))

                setState(initialState)
                setOpenModal(false)
                setUpdate(false)
            })
            .catch(err => console.log(err.message))
        } else {
            store('tags', data)
            .then(res => {
                setTags([res.data.data, ...tags])
                setState(initialState)
                setOpenModal(false)
            })
            .catch(err => console.log(err.message))
        }
    }

    const handleUpdate = data => {
        setUpdate(true)
        setOpenModal(true)

        setState({
            ...state,
            id: data.id,
            name: data.name
        })
    }

    const handleDelete = id => {
        destroy('tags', state.id)
        .then(res => {
            setTags(tags.filter(tag => tag.id !== res.data.data.id))
            setState({
                id: 0,
                name: ""
            })
            setOpenModal(false)
            setUpdate(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        collectAll('tags')
        .then(res => {
            setTags(res.data.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <PageHeader pageName="Tags" gutterBottom={20} />

            <div className={classes.contentContainer}>
                <Grid container spacing={2}>
                    {tags.map(tag => (
                        <Grid key={tag.id} item xs={12} sm={12} md={4} lg={3}>
                            <OrbCardComponent 
                                topLevel={tag.name}
                                title={tag.name}
                                subtitle={tag.name}
                                entity={tag}
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
                                    {update ? 'Update' : 'Create' } Tag
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>
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
                                                name: ""
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

export default Tags
