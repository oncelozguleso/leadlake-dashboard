import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Router>
      <Box sx={{ 
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#FAFAFA'
      }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: '280px', // To account for sidebar width
            backgroundColor: '#FAFAFA',
          }}
        >
          {children}
        </Box>
      </Box>
    </Router>
  );
};

export default Layout; 