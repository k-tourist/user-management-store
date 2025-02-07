import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { handleVerificationCodeChange, handleVerificationCodeKeyDown } from '../../../../../common/utils';
import { styles } from './styles';

export const AddAppVerificationModal = ({ open, onClose }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isDefault, setIsDefault] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Scan QR Code',
      description: 'Scan the QR code below to manually enter the secret key into your authenticator app.'
    },
    {
      number: 2,
      title: 'Get Verification Code',
      description: 'Enter the 6-digit code you see in your authenticator app.'
    },
    {
      number: 3,
      title: 'Add a label for this authenticator',
      description: 'Enter a label to help you recognize this authenticator.',
      required: true
    }
  ];

  const handleCopyCode = () => {
    // Add copy functionality
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Setup Authenticator App"
      content={
        <Box sx={styles.content}>
          <Typography sx={styles.description}>
            Each time you log in, in addition to your password, you'll use an authenticator app to generate a non-time code.
          </Typography>

          {steps.map((step) => (
            <Box key={step.number} sx={styles.stepContainer}>
              <Box sx={styles.stepHeader}>
                <Typography sx={styles.stepTag}>
                  Step {step.number}
                </Typography>
                <Typography sx={styles.stepTitle}>
                  {step.title}
                </Typography>
              </Box>
              <Box sx={styles.descriptionContainer}>
                <Typography sx={styles.stepDescription}>
                  {step.description}
                </Typography>
                {step.required && (
                  <Typography sx={styles.requiredText}>
                    This is required
                  </Typography>
                )}
              </Box>
              
              {/* QR Code section under Step 1 */}
              {step.number === 1 && (
                <Box sx={styles.qrSection}>
                  <Box sx={styles.qrContainer}>
                    {/* QR Code will go here */}
                  </Box>

                  <Box sx={styles.secretKeyContainer}>
                    <Typography sx={styles.cantSeeText}>
                      Can't See QR Code?
                    </Typography>
                    <Typography sx={styles.enterKeyText}>
                      Enter this secret key instead:
                    </Typography>
                    <Typography sx={styles.secretKey}>
                      JBSW Y3DP EHPK 3PXP
                    </Typography>
                    <Button
                      startIcon={<ContentCopyIcon />}
                      onClick={handleCopyCode}
                      sx={styles.copyButton}
                    >
                      Copy Code
                    </Button>
                  </Box>
                </Box>
              )}

              {step.number === 2 && (
                <Box sx={styles.verificationSection}>
                  <Typography sx={styles.verificationLabel}>
                    Enter verification code
                  </Typography>
                  <Box sx={styles.codeInputContainer}>
                    {verificationCode.map((digit, index) => (
                      <Box
                        key={index}
                        component="input"
                        type="text"
                        maxLength={1}
                        value={digit}
                        data-index={index}
                        onChange={(e) => handleVerificationCodeChange(index, e.target.value, verificationCode, setVerificationCode)}
                        onKeyDown={(e) => handleVerificationCodeKeyDown(index, e)}
                        sx={styles.codeInput}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {step.number === 3 && (
                <Box sx={styles.labelSection}>
                  <TextField
                    fullWidth
                    placeholder="Enter a label for this authenticator"
                    sx={styles.labelInput}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isDefault}
                        onChange={(e) => setIsDefault(e.target.checked)}
                        sx={styles.checkbox}
                      />
                    }
                    label="Make it default method"
                    sx={styles.checkboxLabel}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onClose} sx={styles.verifyButton}>
            Verify
          </Button>
        </>
      }
    />
  );
}; 