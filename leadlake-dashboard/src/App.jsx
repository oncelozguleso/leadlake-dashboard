import { ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Scrape from './pages/Scrape';
import Validate from './pages/Validate';
import EmailGen from './pages/EmailGen';
import University from './pages/University';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrape" element={<Scrape />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/email-gen" element={<EmailGen />} />
          <Route path="/university" element={<University />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
