import { Box, Typography, Switch } from '@mui/material';
import { useState } from 'react';
import CustomAuthList from './CustomAuthList';

const SecuritySettings = () => {
  const [mfaEnabled, setMfaEnabled] = useState(false);

  return (
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

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <CustomAuthList
          title="Authenticator App Codes"
          description="Verify one-time codes generated in your preferred third-party authenticator app."
        />
        <Box sx={{ borderBottom: '1px solid #E5E7EB' }} />
        
        <CustomAuthList
          title="Email Verification"
          description="Verify one-time codes sent to your registered email address."
        />
        <Box sx={{ borderBottom: '1px solid #E5E7EB' }} />
        
        <CustomAuthList
          title="Phone Verification"
          description="Verify one-time codes sent to your mobile number."
        />
      </Box>
    </Box>
  );
};

export default SecuritySettings; 