import { Box, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const EditAppVerificationModal = ({ open, onClose, app }) => {
  const [label, setLabel] = useState(app?.label || '');

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Edit Authenticator Label"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>
              Edit a Label for this Authenticator
            </Typography>
            <Typography sx={styles.description}>
              Enter a label to help you recognize this authenticator. <Typography component="span" sx={styles.blueText}>This is Required</Typography>
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