import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import MyProfile from './MyProfile';
import SecuritySettings from './SecuritySettings';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3, width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#E5E7EB' }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#204464',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#6B7280',
              '&.Mui-selected': {
                color: '#204464',
              }
            }
          }}
        >
          <Tab label="My Profile" />
          <Tab label="Security Settings" />
        </Tabs>
      </Box>

      {activeTab === 0 ? <MyProfile /> : <SecuritySettings />}
    </Box>
  );
};

export default Profile; 