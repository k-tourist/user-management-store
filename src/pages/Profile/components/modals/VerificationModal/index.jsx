import { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider
} from '@mui/material';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { GuardIcon, EmailIcon } from '../../../../../components/Icons';
import { maskPhone } from '../../../../../common/utils';
import { styles } from './styles';

export const VerificationModal = ({ open, onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedMethod, setSelectedMethod] = useState('');
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
    const [deliveryMethod, setDeliveryMethod] = useState('sms');
    const [timer, setTimer] = useState(30);
    const [timerActive, setTimerActive] = useState(false);

    const handleContinue = () => {
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleResendCode = () => {
        setTimer(30);
        setTimerActive(true);
    };

    const handleVerifyCode = () => {
        onClose();
    };

    const handleVerificationCodeChange = (index, value, code, setCode) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleVerificationCodeKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
            const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
            if (prevInput) prevInput.focus();
        }
    };

    useEffect(() => {
        if (step === 2) {
            setTimerActive(true);
        }
    }, [step]);



    const renderMethodSelection = () => (
        <Box sx={styles.content}>
            <Box sx={styles.section}>
                <Typography sx={styles.sectionTitle}>
                    Authenticator App Codes
                </Typography>
                <RadioGroup
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                >
                    <FormControlLabel
                        value="app"
                        control={<Radio sx={styles.radio} />}
                        label={
                            <Box sx={styles.methodLabel}>
                                <GuardIcon />
                                <Typography>Google Authenticator</Typography>
                            </Box>
                        }
                    />
                </RadioGroup>
            </Box>

            <Divider sx={styles.divider} />
            <Box sx={styles.section}>
                <Typography sx={styles.sectionTitle}>
                    Email Verification
                </Typography>
                <RadioGroup
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                >
                    <FormControlLabel
                        value="email"
                        control={<Radio sx={styles.radio} />}
                        label={
                            <Box sx={styles.methodLabel}>
                                <EmailIcon />
                                <Typography>test@example.com</Typography>
                            </Box>
                        }
                    />
                </RadioGroup>
            </Box>

            <Divider sx={styles.divider} />

            <Box sx={styles.section}>
                <Typography sx={styles.sectionTitle}>
                    Phone Verification
                </Typography>
                <RadioGroup
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                >
                    <FormControlLabel
                        value="phone"
                        control={<Radio sx={styles.radio} />}
                        label={
                            <Box sx={styles.methodLabel}>
                                <Typography>+92 ****562</Typography>
                            </Box>
                        }
                    />
                </RadioGroup>

                <Typography sx={styles.sectionTitle}>
                    Delivery Method
                </Typography>
                <Typography sx={styles.description}>
                    You'll receive a digit code via SMS or voice call. Make sure your phone is nearby.
                </Typography>
                <RadioGroup
                    row
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    sx={styles.deliveryGroup}
                >
                    <FormControlLabel
                        value="sms"
                        control={<Radio sx={styles.radio} />}
                        label="Text Message"
                    />
                    <FormControlLabel
                        value="call"
                        control={<Radio sx={styles.radio} />}
                        label="Phone Call"
                    />
                </RadioGroup>
            </Box>
        </Box>
    );

    const renderVerification = () => (
        <>
            <Typography sx={styles.description}>
                Your phone number for verification is: {maskPhone('1234567890')}. Please check your messages and enter the verification code to proceed.
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
                            <Typography sx={styles.resendText}>
                                Resend Code
                            </Typography>
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
    );

    return (
        <CustomDialog
            open={open}
            onClose={onClose}
            title={step === 1 ? "Select a Verification Method" : "Verify Your Identity"}
            content={step === 1 ? renderMethodSelection() : renderVerification()}
            actions={
                <>
                    {step === 1 ? (
                        <>
                            <Button onClick={onClose} sx={styles.cancelButton}>
                                Cancel
                            </Button>
                            <Button onClick={handleContinue} sx={styles.continueButton}>
                                Continue
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleBack} sx={styles.cancelButton}>
                                Change Verification Method
                            </Button>
                            <Button onClick={handleVerifyCode} sx={styles.verifyButton}>
                                Verify Code
                            </Button>
                        </>
                    )}
                </>
            }
        />
    );
}; 