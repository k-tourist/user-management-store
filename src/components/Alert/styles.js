export const styles = {
  container: {
    width: '100%',
    height: { xs: '40px', sm: '48px' },
    backgroundColor: '#204464',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  message: {
    color: '#ffffff',
    fontSize: { xs: '16px', sm: '20px' },
    lineHeight: { xs: '20px', sm: '24px' },
    px: { xs: '48px', sm: '64px' }
  },
  exitButton: {
    position: 'absolute',
    right: { xs: '8px', sm: '16px' },
    width: { xs: '44px', sm: '54px' },
    height: { xs: '20px', sm: '24px' },
    backgroundColor: '#E5E7EB',
    color: '#000000',
    fontSize: { xs: '11px', sm: '12px' },
    lineHeight: { xs: '13px', sm: '14.5px' },
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#D1D5DB'
    }
  }
}; 