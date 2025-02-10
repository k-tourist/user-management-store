import { Box, Tabs, Tab, IconButton } from '@mui/material';
import { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MyProfile from './components/MyProfile';
import SecuritySettings from './components/SecuritySettings';
import { VerificationModal } from './components/modals/VerificationModal';
import { styles } from './styles';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleHelpClick = () => {
    if (activeTab === 1) { // Only open modal in Security Settings tab
      setVerificationModalOpen(true);
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.tabContainer}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          sx={styles.tabs}
        >
          <Tab label="My Profile" />
          <Tab label="Security Settings" />
        </Tabs>
        <IconButton 
          sx={styles.helpButton}
          onClick={handleHelpClick}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Box>

      {activeTab === 0 ? <MyProfile /> : <SecuritySettings />}

      <VerificationModal 
        open={verificationModalOpen}
        onClose={() => setVerificationModalOpen(false)}
      />
    </Box>
  );
};

export default Profile; 