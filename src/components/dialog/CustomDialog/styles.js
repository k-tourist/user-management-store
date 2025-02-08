export const styles = {
  paper: {
    width: {
      xs: '100%',
      sm: '685px'
    },
    maxWidth: '685px',
    minHeight: '252px',
    borderRadius: '12px',
    p: { xs: 2, sm: 3 },
    m: { xs: 2, sm: 0 }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: '24px'
  },
  title: {
    fontSize: '30px',
    lineHeight: '36px',
    fontWeight: 600,
    color: '#111827',
    p: 0,
    m: 0
  },
  closeButton: {
    p: 0,
    color: '#204464',
    '& .MuiSvgIcon-root': {
      width: { xs: '20px', sm: '24px' },
      height: { xs: '20px', sm: '24px' }
    }
  },
  content: {
    p: 0
  },
  actions: {
    p: 0,
    mt: '32px',
    gap: '12px'
  }
}; 