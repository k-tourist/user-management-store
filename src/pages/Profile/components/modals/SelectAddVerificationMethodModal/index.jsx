import { Box, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';
import { GuardIcon, EmailIcon, PhoneIcon } from '../../../../../components/Icons';

export const SelectAddVerificationMethodModal = ({ open, onClose, onClickNext }) => {

    const [selectedMethod, setSelectedMethod] = useState('app');

    const handleNext = () => {
        onClickNext(selectedMethod);
        onClose();
    };

    return (
        <CustomDialog
            open={open}
            onClose={onClose}
            title="Select Verification Method"
            content={
                <Box sx={styles.content}>
                    <Typography sx={styles.description}>Choose a method for multi-factor authentication.</Typography>
                    <RadioGroup sx={styles.radioGroup} value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
                        <FormControlLabel
                            labelPlacement="start"
                            value="app"
                            control={<Radio sx={styles.radio} />}
                            label={
                                <Box sx={styles.radioLabelContainer}>
                                    <Box sx={styles.radioLabelLeftSection}>
                                        <GuardIcon width="40px" height="40px" />
                                    </Box>
                                    <Box sx={styles.radioLabelRightSection}>
                                        <Typography sx={styles.radioLabelTitle}>Authenticator App</Typography>
                                        <Typography sx={styles.radioLabelDescription}>Use a third-party authenticator app to generate one-time codes.</Typography>
                                    </Box>
                                </Box>
                            }
                            sx={{...styles.controlContainer, border: selectedMethod === 'app' ? '1px solid #204464' : '1px solid #E5E7EB'}}
                        />
                        <FormControlLabel
                            labelPlacement="start"
                            value="email"
                            control={<Radio sx={styles.radio} />}
                            label={
                                <Box sx={styles.radioLabelContainer}>
                                    <Box sx={styles.radioLabelLeftSection}>
                                        <EmailIcon width="40px" height="40px" />
                                    </Box>
                                    <Box sx={styles.radioLabelRightSection}>
                                        <Typography sx={styles.radioLabelTitle}>Email Verification</Typography>
                                        <Typography sx={styles.radioLabelDescription}>Receive a one-time code on your registered email.</Typography>
                                    </Box>
                                </Box>
                            }
                            sx={{...styles.controlContainer, border: selectedMethod === 'email' ? '1px solid #204464' : '1px solid #E5E7EB'}}
                        />
                        <FormControlLabel
                            labelPlacement="start"
                            value="phone"
                            control={<Radio sx={styles.radio} />}
                            label={
                                <Box sx={styles.radioLabelContainer}>
                                    <Box sx={styles.radioLabelLeftSection}>
                                        <PhoneIcon width="40px" height="40px" />
                                    </Box>
                                    <Box sx={styles.radioLabelRightSection}>
                                        <Typography sx={styles.radioLabelTitle}>Phone Verification</Typography>
                                        <Typography sx={styles.radioLabelDescription}>Receive a one-time code on your registered mobile number.</Typography>
                                    </Box>
                                </Box>
                            }
                            sx={{...styles.controlContainer, border: selectedMethod === 'phone' ? '1px solid #204464' : '1px solid #E5E7EB'}}
                        />
                    </RadioGroup>
                </Box>
            }
            actions={
                <>
                    <Button onClick={onClose} sx={styles.cancelButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleNext} sx={styles.nextButton}>
                        Next
                    </Button>
                </>
            }
        />
    );
}; 