import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 80;

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar 
        width={SIDEBAR_WIDTH} 
        open={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        variant={isMobile ? 'temporary' : 'permanent'}
      />
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: `calc(100% - ${SIDEBAR_WIDTH}px)` }
        }}
      >
        {/* Header */}
        <Header 
          height={HEADER_HEIGHT} 
          onMenuClick={handleSidebarToggle}
          showMenuIcon={isMobile}
        />
        
        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3 },
            mt: `${HEADER_HEIGHT}px`,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout; 