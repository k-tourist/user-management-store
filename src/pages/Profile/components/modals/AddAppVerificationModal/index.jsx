import { Box, Typography, Button } from '@mui/material';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const AddAppVerificationModal = ({ open, onClose }) => {
  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Setup Authenticator App"
      content={
        <Box sx={styles.content}>
          <Typography variant="body1">
            Scan the QR code below with your authenticator app to get started.
          </Typography>
          <Box sx={styles.qrContainer}>
            {/* QR Code will go here */}
          </Box>
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={onClose}>
            Verify
          </Button>
        </>
      }
    />
  );
}; 