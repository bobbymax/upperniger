import React from 'react'
import { 
    Button,
    Grid,
    Typography 
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

const PageHeader = ({pageName, gutterBottom, addBttn, addBttnAction}) => {
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Typography 
                    variant="h5" 
                    component="h2"
                    style={{ marginBottom: gutterBottom }}
                >
                    {pageName}
                </Typography>
            </Grid>
            <Grid item md={4}>
                {addBttn ?  
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={
                            <Add />
                        }
                        onClick={() => addBttnAction()}
                    >
                        Add {pageName}
                    </Button>
                : null}
            </Grid>
        </Grid>
    )
}

export default PageHeader
