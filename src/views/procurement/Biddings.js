/* eslint-disable no-unused-vars */
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core'
import { ShowChart } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import PageHeader from '../../commons/PageHeader'
import { collectAll } from '../../utils/helpers/functions/controllers'
import { useNavigate } from 'react-router-dom'

const Biddings = () => {

    const [projects, setProjects] = useState([])

    const history = useNavigate()

    const handleBidding = data => {
        history(`projects/${data.reference_no}/details`, {
            state: data
        })
    }

    const truncate = str => {
        return str.length > 30 ? str.substring(0, 26) + "..." : str
    }
    
    useEffect(() => {
        try {
            collectAll('projects/tenders')
            .then(res => {
                setProjects(res.data.data)
            })
            .catch(err => console.log(err.message))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <PageHeader pageName="Bidding" gutterBottom={20} />

            <Grid container spacing={2}>

                {projects.length > 0 && projects.map(project => (
                    <Grid item md={4} key={project.id}>
                        <Card style={{ overflow: 'auto' }}>
                            <CardHeader 
                                avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton 
                                        aria-label="settings"
                                        onClick={() => handleBidding(project)}
                                    >
                                        <ShowChart />
                                    </IconButton>
                                }
                                title={project.category.name}
                                subheader={project.duration + ' ' + project.measureIn}
                            />
                            <CardContent>
                                {/* content */}
                                <Typography variant="h5" component="h2">
                                    {truncate(project.description)}
                                </Typography>
                                <Typography color="textSecondary">
                                    {project.location}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Biddings
