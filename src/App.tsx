import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopBar from './components/TopBar';
import { createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderView from './views/OrderView';
import HomeView from './views/HomeView';
import ApplicationsView from './views/ApplicationsView';
import ReportsView from './views/ReportsView';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CreateOrderView from './views/CreateOrderView';

const theme = createTheme({
  palette: {
    primary:{
      main: "#0D0A0B"
    },
    secondary: {
      main: "#454955"
    },
    info: {
      main: "##8ec04a"
    },

  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopBar/>}>
            <Route index element={<HomeView/>} />
            <Route path='ordenes' element={<OrderView/>} />
            <Route path='aplicaciones' element={<ApplicationsView/>} />
            <Route path='reportes' element={<ReportsView/>} />
            <Route path='nueva-orden' element={<CreateOrderView/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
