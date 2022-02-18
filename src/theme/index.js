import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: '#1d1d1d'
        },
        secondary: {
            main: '#ecf0f1'
        }
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif"
    }
})

export default theme