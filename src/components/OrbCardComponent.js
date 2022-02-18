import React from 'react'
import { useStyles } from '../theme/styles'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Edit } from '@material-ui/icons'

const OrbCardComponent = ({
    topLevel, 
    title, 
    subtitle, 
    entity=null, 
    onEdit
}) => {

    const classes = useStyles()

    return (
        <Card className={classes.contentCard}>
            <CardContent>
                <Typography
                    color="textSecondary"
                    className={classes.cardTopText}
                    gutterBottom
                >
                    {topLevel}
                </Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.cardTextTitle}
                >
                    {title}
                </Typography>
                <Typography 
                    color="textSecondary"
                >
                    {subtitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    startIcon={<Edit />} 
                    size="small"
                    onClick={() => onEdit(entity)}
                >
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}

export default OrbCardComponent
