import { Box, Typography, Button, TextField } from '@mui/material';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const AddEmailVerificationModal = ({ open, onClose }) => {
  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Setup Email Verification"
      content={
        <Box sx={styles.content}>
          <Typography variant="body1" sx={styles.description}>
            Enter your email address to receive verification codes.
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
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