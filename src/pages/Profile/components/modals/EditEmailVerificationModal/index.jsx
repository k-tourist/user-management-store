import { Box, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const EditEmailVerificationModal = ({ open, onClose, email }) => {
  const [label, setLabel] = useState(email?.label || '');

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Edit Email Label"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>
              Edit a Label for this Email
            </Typography>
            <Typography sx={styles.description}>
              Edit a label to help you recognize this email. <Typography component="span" sx={styles.blueText}>This is Optional</Typography>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter a label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              sx={styles.input}
            />
          </Box>
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleSave} sx={styles.saveButton}>
            Save
          </Button>
        </>
      }
    />
  );
}; 