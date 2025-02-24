import { Box, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

// Import SVGs using relative paths
import home from '../../assets/home.svg';
import search from '../../assets/search.svg';
import checkCircle from '../../assets/check-circle.svg';
import vector from '../../assets/vector.svg';
import settings from '../../assets/settings.svg';
import help from '../../assets/help.svg';
import university from '../../assets/university.svg';

const sidebarButtonStyles = {
  justifyContent: 'flex-start',
  padding: '12px 24px',
  color: '#666',
  textTransform: 'none',
  width: '100%',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  },
  '& .MuiButton-startIcon': {
    marginRight: '16px'
  }
};

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      icon: (
        <Box component="img" 
          src={home} 
          sx={{ 
            width: 24, 
            height: 24,
            display: 'flex',
            alignItems: 'center',
            filter: location.pathname === '/' ? 
              'invert(43%) sepia(98%) saturate(1720%) hue-rotate(190deg) brightness(97%) contrast(98%)' : 
              'none'
          }} 
        />
      )
    },
    { 
      name: 'Scrape', 
      href: '/scrape', 
      icon: (
        <Box component="img" 
          src={search} 
          sx={{ 
            width: 24, 
            height: 24,
            display: 'flex',
            alignItems: 'center',
            filter: location.pathname === '/scrape' ? 
              'invert(43%) sepia(98%) saturate(1720%) hue-rotate(190deg) brightness(97%) contrast(98%)' : 
              'none'
          }} 
        />
      )
    },
    { 
      name: 'Validate', 
      href: '/validate', 
      icon: (
        <Box component="img" 
          src={checkCircle} 
          sx={{ 
            width: 24, 
            height: 24,
            display: 'flex',
            alignItems: 'center',
            filter: location.pathname === '/validate' ? 
              'invert(43%) sepia(98%) saturate(1720%) hue-rotate(190deg) brightness(97%) contrast(98%)' : 
              'none'
          }} 
        />
      )
    },
    { 
      name: 'AI Studio', 
      href: '/email-gen', 
      icon: (
        <Box component="img" 
          src={vector} 
          sx={{ 
            width: 24, 
            height: 24,
            display: 'flex',
            alignItems: 'center',
            ml: 0.3,
            mr: -0.3,
            filter: location.pathname === '/email-gen' ? 
              'invert(43%) sepia(98%) saturate(1720%) hue-rotate(190deg) brightness(97%) contrast(98%)' : 
              'none'
          }} 
        />
      )
    },
    { 
      name: 'LL University', 
      href: '/university', 
      icon: (
        <Box component="img" 
          src={university} 
          sx={{ 
            width: 24, 
            height: 24,
            display: 'flex',
            alignItems: 'center',
            filter: location.pathname === '/university' ? 
              'invert(43%) sepia(98%) saturate(1720%) hue-rotate(190deg) brightness(97%) contrast(98%)' : 
              'none'
          }} 
        />
      )
    }
  ];

  return (
    <Box
      sx={{
        width: 280,
        flexShrink: 0,
        borderRight: '1px solid #e0e0e0',
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo section with bottom border */}
      <Box 
        sx={{ 
          p: 2,
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="LeadLake"
          sx={{ 
            height: 48,
            mt: 1  // Added margin-top to move logo down
          }}
        />
      </Box>

      {/* Navigation buttons */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2, pt: 2 }}>
        {navigation.map((item, index) => (
          <Button
            key={index}
            startIcon={item.icon}
            sx={{
              ...sidebarButtonStyles,
              color: location.pathname === item.href ? '#2196f3' : '#666',
              backgroundColor: location.pathname === item.href ? 'rgba(33, 150, 243, 0.08)' : 'transparent',
              '&:hover': {
                backgroundColor: location.pathname === item.href ? 
                  'rgba(33, 150, 243, 0.12)' : 
                  'rgba(0, 0, 0, 0.04)'
              },
              '& .MuiButton-startIcon': {
                margin: 0,
                marginRight: '16px',
                display: 'flex',
                alignItems: 'center'
              }
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>

      {/* Bottom buttons */}
      <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
        <Button
          startIcon={
            <Box component="img" 
              src={settings} 
              sx={{ width: 24, height: 24 }} 
            />
          }
          sx={sidebarButtonStyles}
        >
          Settings
        </Button>
        <Button
          startIcon={
            <Box component="img" 
              src={help} 
              sx={{ width: 24, height: 24 }} 
            />
          }
          sx={sidebarButtonStyles}
        >
          Help
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar; // Updated imports
