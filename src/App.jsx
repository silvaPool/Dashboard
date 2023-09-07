import { ThemeProvider } from '@mui/material';
import './App.css'
import { Auth } from './context/AuthContext';
import Routes from './routes/AppRoutes';
import theme from './theme/theme';




function App() {

  return (
    <>

      <ThemeProvider theme={theme}>


        <Auth>

          <Routes />

        </Auth>

      </ThemeProvider>
    </>
  );
}

export default App
