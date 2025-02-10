export const styles = {
  appBar: {
    backgroundColor: 'background.paper',
    color: 'text.primary',
    boxShadow: 1,
    width: { xs: '100%', md: `calc(100%)` },
    position: 'relative',
  },
  toolbar: {
    height: '100%'
  },
  menuButton: {
    mr: 2
  },
  title: {
    flexGrow: 1,
    fontSize: { xs: '1rem', sm: '1.25rem' }
  },
  iconContainer: {
    display: 'flex',
    gap: { xs: 0.5, sm: 1 }
  },
  header: {
    height: '72px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #E5E7EB',
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  welcomeText: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111827'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  addButton: {
    width: '40px',
    height: '40px',
    backgroundColor: '#204464',
    borderRadius: '8px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  },
  helpButton: {
    padding: 0,
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
      color: '#6B7280'
    }
  },
  divider: {
    height: '40px'
  },
  select: {
    height: '40px',
    minWidth: '120px',
    '& .MuiOutlinedInput-root': {
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
  trialTag: {
    height: '40px',
    backgroundColor: '#FFF3E0',
    borderRadius: '20px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  monitorIcon: {
    color: '#EF6C00',
    width: '20px',
    height: '20px'
  },
  trialText: {
    color: '#EF6C00',
    fontSize: '14px',
    lineHeight: '20px',
  },

  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#204464',
    fontSize: '16px',
    fontWeight: 500,
    color: '#fff'
  }
}; 