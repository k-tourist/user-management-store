import { Box, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const EditPhoneVerificationModal = ({ open, onClose, phone }) => {
  const [label, setLabel] = useState(phone?.label || '');
  const [verificationMethod, setVerificationMethod] = useState(phone?.deliveryMethod === 'call' ? 'call' : 'sms');

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Edit Phone Label & Delivery Method"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>
              Edit a Label for this Phone
            </Typography>
            <Typography sx={styles.description}>
              Edit a label to help you recognize this Phone Number. <Typography component="span" sx={styles.blueText}>This is Optional</Typography>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter a label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              sx={styles.input}
            />
          </Box>

          <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>
              Change Delivery Method
            </Typography>
            <Typography sx={styles.description}>
              You'll receive a digit code via SMS or voice call. Make sure your phone is nearby.
            </Typography>
            <RadioGroup
              value={verificationMethod}
              onChange={(e) => setVerificationMethod(e.target.value)}
              sx={styles.radioGroup}
            >
              <FormControlLabel 
                value="sms" 
                control={<Radio sx={styles.radio} />} 
                label="Text Message" 
                sx={styles.radioLabel}
              />
              <FormControlLabel 
                value="call" 
                control={<Radio sx={styles.radio} />} 
                label="Phone Call" 
                sx={styles.radioLabel}
              />
            </RadioGroup>
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