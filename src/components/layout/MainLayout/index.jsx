import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Alert from '../../Alert';
import { styles } from './styles';

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={styles.root}>
      <Alert />
      
      <Box sx={styles.contentContainer}>
        <Sidebar 
          open={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          variant={isMobile ? 'temporary' : 'permanent'}
        />
        
        <Box sx={styles.mainContent}>
          <Header
            onMenuClick={handleSidebarToggle}
            showMenuIcon={isMobile}
          />
          
          <Box sx={styles.content}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout; 