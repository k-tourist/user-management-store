import { Box, Tabs, Tab, IconButton } from '@mui/material';
import { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MyProfile from './components/MyProfile';
import SecuritySettings from './components/SecuritySettings';
import { styles } from './styles';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
        <IconButton sx={styles.helpButton}>
          <HelpOutlineIcon />
        </IconButton>
      </Box>

      {activeTab === 0 ? <MyProfile /> : <SecuritySettings />}
    </Box>
  );
};

export default Profile; 