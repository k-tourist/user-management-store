export const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
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
    fontSize: '16px',
    lineHeight: '20px',
    color: '#000000DE'
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
  nextButton: {
    height: '40px',
    fontSize: '14px',
    lineHeight: '17px',
    backgroundColor: '#204464',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  },
  blueText: {
    color: '#204464',
    display: 'inline'
  }
}; 