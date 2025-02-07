export const styles = {
  container: {
    mt: 3
  },
  mfaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3
  },
  mfaTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827'
  },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#204464',
      '&:hover': {
        backgroundColor: 'rgba(32, 68, 100, 0.04)',
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#204464',
    }
  },
  authListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  },
  divider: {
    borderBottom: '1px solid #E5E7EB'
  }
}; 