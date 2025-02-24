import { Box, Typography, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import JobsTable from './JobsTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Welcome to{' '}
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(90deg, #3B93FF 0%, #1666EC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          LeadLake!
        </Box>
      </Typography>

      <Typography sx={{ color: '#666', mb: 0.25 }}>
        Your Jobs
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #E7E5E9',
          position: 'relative',
          pb: 2,
          mb: 2,
        }}
      >
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          TabIndicatorProps={{
            sx: {
              display: 'none'
            }
          }}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 'auto',
              mr: 2,
              color: '#666',
              fontSize: '16px',
              padding: '26px 0 0 0',
            },
            '& .Mui-selected': {
              color: '#1976d2',
            }
          }}
        >
          <Tab label="All" value="all" />
          <Tab label="Pending" value="pending" />
          <Tab label="Completed" value="completed" />
          <Tab label="Failed" value="failed" />
        </Tabs>

        <TextField
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#666' }} />
              </InputAdornment>
            ),
          }}
          sx={{ 
            width: 200,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            }
          }}
        />
      </Box>

      <JobsTable activeTab={activeTab} />
    </Box>
  );
};

export default Dashboard; 