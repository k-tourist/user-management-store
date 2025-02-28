export const styles = {
  paper: {
    width: {
      xs: '100%',
      sm: '685px',
      md: '765px'
    },
    maxWidth: '785px',
    // minHeight: '252px',
    borderRadius: '12px',
    p: { xs: 2, sm: 3 },
    m: { xs: 2, sm: 0 }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: '12px'
  },
  title: {
    fontSize: {xs: '24px', sm: '30px'},
    lineHeight: {xs: '28px', sm: '36px'},
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#000000DE',
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
    p: 1, //some small dialogs has scroll if 0
  },
  actions: {
    p: 0,
    mt: '24px',
    gap: '12px'
  }
}; 