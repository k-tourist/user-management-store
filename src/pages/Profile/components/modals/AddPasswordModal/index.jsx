import { Box, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import {
  validateEmail,
  handleVerificationCodeChange,
  handleVerificationCodeKeyDown,
  maskEmail
} from '../../../../../common/utils';
import { styles } from './styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export const AddPasswordModal = ({ open, onClose, isNew = false }) => {
  const [emailError, setEmailError] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const email = 'abraham@gmail.com';

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

  const handleSendCode = () => {
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    setIsEmailVerified(true);
    setTimerActive(true);
  };

  const handleResendCode = () => {
    setTimer(30);
    setTimerActive(true);
  };

  const handleTogglePassword = () => {
    if (showPassword === null || showPassword === undefined) return;
    setShowPassword(!showPassword);
  }

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  }

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  }

  const validatePassword = (password = "") => {
    console.log('password==>', password);
    return [
      { isValid: password.length >= 8, errorText: 'Must be at least 8 characters long' },                        // Length requirement
      {
        isValid: /[A-Z]/.test(password) &&                    // At least 1 uppercase
          /[a-z]/.test(password) &&                    // At least 1 lowercase
          /\d/.test(password),
        errorText: 'Include at least 1 uppercase letter & 1 lowercase letter & One number'
      },                         // At least 1 number
      { isValid: /[!@#$%^&*]/.test(password), errorText: 'Include at least 1 special character (!@#$%^&*)' }                  // At least 1 special character
    ];
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={!isEmailVerified ? "Verify Your Email" : isNew ? "Set Your Password" : "Change Your Password"}
      content={
        <Box sx={styles.content}>
          {isEmailVerified ? (
            <>
              <Typography sx={styles.description}>
                {isNew ? 'Create a secure password for your account.' : 'You\'ll need to enter your current password before setting a new one.'}
              </Typography>

              <Box sx={styles.labelSection}>
                {!isNew && <>
                  <Typography sx={styles.stepTitle}>
                    Current Password
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your current password"
                    type={showCurrentPassword ? "text" : "password"} // Toggle password visibility
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                    sx={{...styles.passwordInput}}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleToggleCurrentPassword} edge="end">
                            {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={!!currentPassword}
                    helperText={currentPassword !== "" ? "Please enter the correct current password." : ""}
                  />
                </>}

                <Typography sx={styles.stepTitle}>
                  Enter New Password
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  sx={styles.passwordInput}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Typography sx={styles.stepTitle}>
                  Confirm New Password
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Confirm new password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  error={!!confirmPassword && confirmPassword !== newPassword}
                  helperText={confirmPassword && confirmPassword !== newPassword ? "Password and Confirm Password do not match." : ""}
                  sx={styles.passwordInput}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {validatePassword(newPassword).map(({ isValid, errorText }, index) => (
                  <Box sx={{ ...styles.errorTestContainer, color: isValid ? '#00CF72' : '#F03D3E' }} key={index}>
                    <CheckCircleRoundedIcon />
                    <Typography>{errorText}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <>
              <Typography sx={styles.description}>
                Your email for verification is: {maskEmail(email)}. Please check your inbox and enter the verification code to proceed.
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
            onClick={isEmailVerified ? onClose : handleSendCode}
            sx={styles.verifyButton}
            disabled={!isEmailVerified && !!emailError}
          >
            {isEmailVerified ? 'Verify' : 'Send Verification Code'}
          </Button>
        </>
      }
    />
  );
}; 