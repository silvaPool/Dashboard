import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({

    typography: typography,
   
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: 'white',
                    backgroundColor: 'rgba(36, 59, 85, 0.9)',
                    marginTop: '1rem',
                    '&:hover': {
                        color: 'black',
                    },
                },
                outlined: {
                    color: 'black',
                    borderColor: 'black',
                    marginTop: '0.5rem',
                    '&:hover': {
                        color: 'white',
                       borderColor: 'white',
                       backgroundColor: 'rgba(36, 59, 85, 0.9)',
                    },
                },
                text: {
                    color: 'white',
                },
            },
        },
    },

});

export default theme;