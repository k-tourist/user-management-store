import { Box, Typography, Button, TextField } from '@mui/material';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const AddPhoneVerificationModal = ({ open, onClose }) => {
  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Setup Phone Verification"
      content={
        <Box sx={styles.content}>
          <Typography variant="body1" sx={styles.description}>
            Enter your phone number to receive verification codes via SMS.
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your phone number"
            sx={styles.input}
          />
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={onClose}>
            Send Code
          </Button>
        </>
      }
    />
  );
}; 