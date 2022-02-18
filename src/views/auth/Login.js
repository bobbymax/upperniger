/* eslint-disable no-unused-vars */
import { Button, Container, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { SendOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import logo from "../../assets/images/logo1.png"
import { useStyles } from '../../theme/styles'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useToken } from '../../utils/hooks/useToken'
import { login } from '../../utils/helpers/functions/controllers'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const classes = useStyles()
    const [token, setToken] = useToken()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleSubmit = e => {
        e.preventDefault()

        login(email, password)
        .then(res => {
            if (res.data.data.token) {
                const newToken = JSON.stringify(res.data.data)
                setToken(newToken)
                navigate('/')
            }
        })
        .catch(err => console.log(err.message))
    }

    return (
        <>
            <div className={classes.formContainer}>
                <Container>
                    <div className={classes.loginFormContainer}>
                        <div>
                            <div className={classes.logoContainer}>
                                <img className={classes.loginLogo} src={logo} alt={'Orbit Logo'} />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className={classes.formGap}>
                                    <TextField 
                                        variant="outlined"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        fullWidth
                                        label="Email Address"
                                        InputProps={{ 
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MailOutlineIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>
                                <div className={classes.formGap}>
                                    <TextField 
                                        variant="outlined"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'}
                                        fullWidth
                                        label="Password"
                                        InputProps={{ 
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockOpenIcon />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        placeholder="Enter Password"
                                        required
                                    />
                                </div>
                                <div className={classes.bttnFront}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        size="large"
                                        endIcon={<SendOutlined />}
                                    >
                                        LOGIN
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Login
