export const styles = {
  wrapper: {
    p: 3,
    width: '100%'
  },
  title: {
    fontSize: {
      xs: '24px',
      sm: '32px'
    },
    lineHeight: {
      xs: '28px',
      sm: '36px'
    },
    mb: '12px'
  },
  description: {
    fontSize: {
      xs: '16px',
      sm: '20px'
    },
    lineHeight: {
      xs: '20px',
      sm: '22px'
    },
    maxWidth: '710px',
    mb: '48px'
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1040px',
    mb: '20px',
    gap: '12px'
  },
  searchField: {
    maxWidth: {
      xs: 'calc(100% - 109px)',
      sm: '417px'
    },
    '& .MuiOutlinedInput-root': {
      height: { xs: '36px', sm: '40px' },
      backgroundColor: '#F9FAFB',
      '& fieldset': {
        borderColor: '#E5E7EB',
      },
      '&:hover fieldset': {
        borderColor: '#E5E7EB',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E5E7EB',
        borderWidth: '1px',
      },
      '&.Mui-focused': {
        backgroundColor: '#F9FAFB',
      }
    },
    '& .MuiOutlinedInput-input': {
      padding: { xs: '6px 12px', sm: '8px 12px' },
      fontSize: { xs: '12px', sm: '14px' },
      lineHeight: { xs: '16px', sm: '20px' },
      '&::placeholder': {
        color: '#6B7280',
        opacity: 1,
      },
    }
  },
  searchIcon: {
    color: '#6B7280',
    fontSize: { xs: '18px', sm: '24px' }
  },
  searchIconContainer: {
    ml: { xs: 0.5, sm: 1 }
  },
  actionButtons: {
    display: 'flex',
    gap: '12px'
  },
  paginationContainer: {
    mt: '32px',
    display: 'flex',
    justifyContent: 'flex-end',
    maxWidth: '1040px',
    '& .MuiPagination-ul': {
      gap: 0
    }
  },
  popoverPaper: {
    width: '185px',
    mt: '4px',
    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
    borderRadius: '12px',
  },
  filterHeader: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '16px',
    borderBottom: '1px solid #E5E7EB',
  },
  filterTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827',
  },
  closeButton: {
    p: 0,
    color: '#6B7280',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#111827',
    }
  },
  filterContent: {
    p: '8px'
  }
}; 