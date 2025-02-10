export const styles = {
  drawer: {
    width: '240px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '240px',
      boxSizing: 'border-box',
      borderRight: '1px solid #E5E7EB',
      position: 'relative',
    }
  },
  sidebar: {
    width: '240px',
    height: '100vh',
    backgroundColor: '#fff',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px',
    paddingLeft: '12px'
  },
  logo: {
    width: '32px',
    height: '32px'
  },
  companyName: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827'
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    height: '50px',
    borderRadius: '6px',
    padding: '12px 20px',
    cursor: 'pointer',
    display: 'flex',
    gap: '24px',
    '&:hover': {
      backgroundColor: '#F3F4F6'
    }

  },
  menuIcon: {
    minWidth: '24px',
    height: '24px',
    color: '#6B7280',
  },
  menuText: {
    '& .MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#111827',
      textAlign: 'left'  // Text alignment for menu items
    }
  },
  divider: {
    margin: '24px 0',
    borderColor: '#E5E7EB'
  },
  sectionTitle: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#6B7280',
    textAlign: 'left',
    paddingLeft: '12px',
    fontWeight: 500
  }
}; 