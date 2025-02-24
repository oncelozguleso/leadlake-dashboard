import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      sx={{
        height: 64,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Empty logo section - just keeping the space and styling */}
      <Box
        sx={{
          width: 280,
          height: '100%',
          backgroundColor: '#F8F8F8',
          borderRight: '1px solid #e0e0e0'
        }}
      />
    </Box>
  );
};

export default Navbar; 