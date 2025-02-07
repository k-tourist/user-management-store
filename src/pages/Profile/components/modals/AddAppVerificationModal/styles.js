export const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  description: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280',
    marginTop: '16px',
    marginBottom: '26px'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    '& + &': {
      marginTop: '16px'
    }
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  stepTag: {
    backgroundColor: 'rgba(32, 68, 100, 0.1)',
    border: '1px solid #204464',
    borderRadius: '16px',
    padding: '4px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464'
  },
  stepTitle: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#111827',
    fontWeight: 500
  },
  descriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px'
  },
  stepDescription: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280'
  },
  requiredText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464',
    textDecoration: 'underline'
  },
  qrContainer: {
    width: '194px',
    height: '194px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  qrSection: {
    display: 'flex',
    gap: '24px',
    backgroundColor: '#F9FAFB',
    padding: '10px',
    borderRadius: '8px'
  },
  secretKeyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
    justifyContent: 'center'
  },
  cantSeeText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    color: '#111827'
  },
  enterKeyText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  secretKey: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#111827',
    fontFamily: 'monospace',
    letterSpacing: '0.1em',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    padding: '8px 12px',
    backgroundColor: 'transparent'
  },
  copyButton: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464',
    padding: '4px 8px',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#204464'
    }
  },
  verificationSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  verificationLabel: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280'
  },
  codeInputContainer: {
    display: 'flex',
    gap: '8px'
  },
  codeInput: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    textAlign: 'center',
    fontSize: '18px',
    '&:focus': {
      outline: 'none',
      borderColor: '#204464'
    }
  },
  labelSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  labelInput: {
    '& .MuiOutlinedInput-root': {
      height: '48px',
      width: '480px',
      fontSize: '18px',
      lineHeight: '44px',
      '& fieldset': {
        borderColor: '#E5E7EB'
      },
      '&:hover fieldset': {
        borderColor: '#E5E7EB'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#204464'
      }
    }
  },
  checkbox: {
    color: '#204464',
    '&.Mui-checked': {
      color: '#204464'
    }
  },
  checkboxLabel: {
    '& .MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#6B7280'
    }
  },
  cancelButton: {
    height: '40px',
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'none'
  },
  verifyButton: {
    height: '40px',
    fontSize: '14px',
    lineHeight: '17px',
    backgroundColor: '#204464',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  }
}; 