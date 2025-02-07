import { Box, Typography, Switch } from '@mui/material';
import { useState } from 'react';
import CustomAuthList from '../CustomAuthList';
import { styles } from './styles';

const SecuritySettings = () => {
  const [mfaEnabled, setMfaEnabled] = useState(false);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mfaContainer}>
        <Typography sx={styles.mfaTitle}>
          Multi-Factor Authentication
        </Typography>
        <Switch
          checked={mfaEnabled}
          onChange={(e) => setMfaEnabled(e.target.checked)}
          sx={styles.switch}
        />
      </Box>

      <Box sx={styles.authListContainer}>
        <CustomAuthList
          title="Authenticator App Codes"
          description="Verify one-time codes generated in your preferred third-party authenticator app."
        />
        <Box sx={styles.divider} />
        
        <CustomAuthList
          title="Email Verification"
          description="Verify one-time codes sent to your registered email address."
        />
        <Box sx={styles.divider} />
        
        <CustomAuthList
          title="Phone Verification"
          description="Verify one-time codes sent to your mobile number."
        />
      </Box>
    </Box>
  );
};

export default SecuritySettings; 