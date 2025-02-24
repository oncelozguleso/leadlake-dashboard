import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Chip,
  IconButton,
  Box,
  Typography,
  Button,
  TextField,
  Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import downloadIcon from '../../assets/download.svg';
import deleteIcon from '../../assets/delete.svg';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    fileName: 'Automotive Companies in New York City, United States',
    creationDate: '21.07.2024',
    status: 'in_progress'
  },
  {
    id: 2,
    fileName: 'Accounting Firms in Kaarst, Germany',
    creationDate: '18.07.2024',
    status: 'completed'
  },
  {
    id: 3,
    fileName: 'Fitness Studios in Kaarst, Germany',
    creationDate: '05.07.2024',
    status: 'completed'
  },
  {
    id: 4,
    fileName: 'Veterinary Clinics in Kaarst, Germany',
    creationDate: '15.06.2024',
    status: 'failed'
  }
];

const getStatusChip = (status) => {
  const statusConfig = {
    in_progress: { label: 'In Progress', color: '#2196f3', bgColor: '#e3f2fd' },
    completed: { label: 'Completed', color: '#4caf50', bgColor: '#e8f5e9' },
    failed: { label: 'Failed', color: '#f44336', bgColor: '#ffebee' }
  };

  const config = statusConfig[status];
  return (
    <Chip 
      label={config.label}
      sx={{
        color: config.color,
        backgroundColor: config.bgColor,
        borderRadius: '4px',
        height: '24px',
        fontWeight: 500,
      }}
    />
  );
};

const filterButtonStyles = {
  textTransform: 'none',
  color: '#666',
  fontFamily: 'Inter',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  }
};

const JobsTable = ({ activeTab }) => {
  const [jobsList, setJobsList] = useState(jobs);

  const handleDelete = (jobId) => {
    setJobsList(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const filteredJobs = jobsList.filter(job => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return job.status === 'in_progress';
    return job.status === activeTab;
  });

  return (
    <Box>
      {/* Table Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            background: 'linear-gradient(90deg, #E0EDFF 0%, #D1E1FC 100%)',
            borderRadius: '8px',
            padding: '10px 16px',
            display: 'grid',
            gridTemplateColumns: '3fr 1fr 1fr 1fr',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>File Name</Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>File Creation Date</Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>Status</Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>Action</Typography>
        </Box>

        {/* Table Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {filteredJobs.map((job) => (
            <Box
              key={job.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: '3fr 1fr 1fr 1fr',
                gap: 2,
                padding: '8px 16px',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ 
                color: '#333', 
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500
              }}>
                {job.fileName}
              </Typography>
              <Typography sx={{ 
                color: '#666', 
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500
              }}>
                {job.creationDate}
              </Typography>
              <Box>{getStatusChip(job.status)}</Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Tooltip title="Download" placement="top">
                  <IconButton size="small">
                    <img src={downloadIcon} alt="Download" style={{ width: 20, height: 20 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement="top">
                  <IconButton 
                    size="small" 
                    onClick={() => handleDelete(job.id)}
                  >
                    <img src={deleteIcon} alt="Delete" style={{ width: 20, height: 20 }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default JobsTable; 