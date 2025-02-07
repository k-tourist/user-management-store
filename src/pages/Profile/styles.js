export const styles = {
  wrapper: {
    p: 3, 
    width: '100%'
  },
  tabContainer: {
    borderBottom: 1, 
    borderColor: '#E5E7EB'
  },
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#204464',
    },
    '& .MuiTab-root': {
      textTransform: 'none',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#6B7280',
      '&.Mui-selected': {
        color: '#204464',
      }
    }
  }
}; 