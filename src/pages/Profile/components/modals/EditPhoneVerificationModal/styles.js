export const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginTop: '40px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  sectionTitle: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827'
  },
  description: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  radioGroup: {
    flexDirection: 'row',
    marginLeft: '2px',
    marginTop: '4px',
    gap: '32px'
  },
  radio: {
    color: '#D1D5DB',
    '&.Mui-checked': {
      color: '#204464'
    }
  },
  radioLabel: {
    '& .MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#111827'
    }
  },
  input: {
    '& .MuiOutlinedInput-root': {
      height: '40px',
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
  cancelButton: {
    height: '40px',
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'none'
  },
  saveButton: {
    height: '40px',
    fontSize: '14px',
    lineHeight: '17px',
    backgroundColor: '#204464',
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a3850'
    }

  },
  blueText: {
    color: '#204464',
    display: 'inline'
  }
}; 