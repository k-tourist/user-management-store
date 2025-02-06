import { Box, Tabs, Tab, Typography, Switch } from '@mui/material';
import { useState } from 'react';
import CustomAuthList from './CustomAuthList';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mfaEnabled, setMfaEnabled] = useState(false);

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

      {activeTab === 0 ? (
        <Box>
          {/* My Profile content will go here */}
        </Box>
      ) : (
        <Box sx={{ mt: 3 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Multi-Factor Authentication
            </Typography>
            <Switch
              checked={mfaEnabled}
              onChange={(e) => setMfaEnabled(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#204464',
                  '&:hover': {
                    backgroundColor: 'rgba(32, 68, 100, 0.04)',
                  },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#204464',
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <CustomAuthList
              title="Authenticator App Codes"
              description="Verify one-time codes generated in your preferred third-party authenticator app."
            />
            
            <CustomAuthList
              title="Email Verification"
              description="Verify one-time codes sent to your registered email address."
            />
            
            <CustomAuthList
              title="Phone Verification"
              description="Verify one-time codes sent to your mobile number."
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Profile; 