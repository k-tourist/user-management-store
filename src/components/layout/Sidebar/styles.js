export const styles = {
  drawer: (width) => ({
    width: width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: width,
      boxSizing: 'border-box',
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      position: 'relative',
    }
  }),
  logoContainer: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  listItemButton: {
    minHeight: 48,
    px: 2.5
  },
  listItemIcon: {
    minWidth: 0,
    mr: 2,
    justifyContent: 'center'
  },
  listItemText: {
    fontSize: { xs: '0.9rem', sm: '1rem' }
  }
}; 