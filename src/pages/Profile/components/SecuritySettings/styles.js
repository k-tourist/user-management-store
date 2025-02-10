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
  },
  appListContainer: {
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  appRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '36px',
    borderRadius: '12px'
  },
  appInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  appTextContainer: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    border: '1px solid #204464',
    borderRadius: '4px',
    padding: '7px 8px'
  },

  appName: {
    fontSize: '10px',
    lineHeight: '10px',
    color: '#204464',
    fontWeight: 500
  },
  appMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  appLabel: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  defaultBadge: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#204464',
    backgroundColor: 'rgba(32, 68, 100, 0.1)',
    padding: '2px 8px',
    borderRadius: '16px'
  },
  moreButton: {
    color: '#6B7280',
    padding: '8px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
  emailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '24px',
    marginY: '16px',
    alignItems: 'center'
  },
  emailInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    '& > .react-tel-input': {
      marginRight: '4px'
    }
  },
  emailName: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#6B7280'
  },
  phoneFlag: {
    width: '200px',
    height: '24px',
    '& .special-label': {
      display: 'none'
    },
    '& .selected-flag': {
      width: '24px',
      height: '24px',
      padding: 0,
      backgroundColor: 'transparent !important'
    },
    '& .flag': {
      transform: 'scale(0.75)'
    },
    '& input': {
      fontSize: '20px',
      lineHeight: '24px',
      color: '#6B7280'
    }
  },
  flagContainer: {
    width: '200px',
    height: '24px'
  },
  flagInput: {
    width: '200px',
    height: '24px',
    border: 'none',
    pointerEvents: 'none',
    background: 'transparent',
    padding: '0',
    paddingLeft: '30px',
    margin: '0',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#6B7280'
  },
  flagButton: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    margin: '0',
    width: '24px',
    height: '24px',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  phoneNumber: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#6B7280'
  },
  defaultTextStyle: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#058205',
    backgroundColor: 'rgba(5, 130, 5, 0.1)',
    padding: '10px 16px',
    borderRadius: '4px'
  },
  menuPaper: {
    width: '240px',
    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
    mt: '4px',
    '& .MuiList-root': {
      padding: '8px 0'
    }
  },
  menuItem: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '10px 16px',
    height: '41px',
    '&:hover': {
      backgroundColor: '#F9FAFB'
    }
  }
}; 