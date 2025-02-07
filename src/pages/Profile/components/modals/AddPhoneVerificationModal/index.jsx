import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { 
  validatePhone, 
  handleVerificationCodeChange, 
  handleVerificationCodeKeyDown,
  maskPhone 
} from '../../../../../common/utils';
import { styles } from './styles';

export const AddPhoneVerificationModal = ({ open, onClose }) => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    setPhoneError(validatePhone(newPhone));
  };

  const handleSendCode = () => {
    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }
    setVerificationSent(true);
    setTimerActive(true);
  };

  const handleResendCode = () => {
    setTimer(30);
    setTimerActive(true);
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={verificationSent ? "Enter the Verification Code" : "Verify your Phone Number"}
      content={
        <Box sx={styles.content}>
          {!verificationSent ? (
            <>
              <Typography sx={styles.description}>
                We will send a one-time code to your phone number. Make sure you have access to it
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
                error={!!phoneError}
                helperText={phoneError}
                sx={styles.phoneInput}
              />

              <Box sx={styles.labelSection}>
                <Box sx={styles.labelHeader}>
                  <Typography sx={styles.stepTitle}>
                    Add a label for this authenticator
                  </Typography>
                  <Typography sx={styles.optionalText}>
                    Optional
                  </Typography>
                </Box>
                <Box sx={styles.descriptionContainer}>
                  <Typography sx={styles.stepDescription}>
                    Enter a label to help you recognize this authenticator
                  </Typography>
                </Box>
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
            </>
          ) : (
            <>
              <Typography sx={styles.description}>
                Your phone number for verification is: {maskPhone(phone)}. Please check your messages and enter the verification code to proceed.
              </Typography>

              <Box sx={styles.verificationSection}>
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

                <Box sx={styles.resendSection}>
                  {timerActive ? (
                    <>
                      <Typography sx={styles.timer}>{timer}s</Typography>
                      <Typography sx={styles.resendText}>Resend Code</Typography>
                    </>
                  ) : (
                    <Typography
                      onClick={handleResendCode}
                      sx={styles.resendActiveText}
                    >
                      Resend Code
                    </Typography>
                  )}
                </Box>
              </Box>
            </>
          )}
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={verificationSent ? onClose : handleSendCode}
            sx={styles.verifyButton}
            disabled={!verificationSent && !!phoneError}
          >
            {verificationSent ? 'Verify' : 'Send Verification Code'}
          </Button>
        </>
      }
    />
  );
}; 