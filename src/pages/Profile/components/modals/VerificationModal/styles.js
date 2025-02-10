export const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '0 24px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  sectionTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827'
  },
  description: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280',
    marginTop: '32px',
    textAlign: 'left'
  },
  methodLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  divider: {
    margin: '24px 0',
    borderColor: '#E5E7EB'
  },
  deliveryGroup: {
    gap: '32px'
  },
  radio: {
    color: '#D1D5DB',
    '&.Mui-checked': {
      color: '#204464'
    }
  },
  verificationSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '24px',
    width: '100%'
  },
  codeInputContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px'
  },
  codeInput: {
    width: '40px',
    height: '40px',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '16px',
    '&:focus': {
      outline: 'none',
      borderColor: '#204464'
    }
  },
  resendSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '40px'
  },
  timer: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  resendText: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280'
  },
  resendActiveText: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#204464',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  cancelButton: {
    height: '40px',
    padding: '0 16px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280',
    textTransform: 'none'
  },
  continueButton: {
    height: '40px',
    padding: '0 16px',
    fontSize: '14px',
    lineHeight: '20px',
    backgroundColor: '#204464',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  },
  verifyButton: {
    height: '40px',
    padding: '0 16px',
    fontSize: '14px',
    lineHeight: '20px',
    backgroundColor: '#204464',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  }
}; 