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
    fontWeight: 600,
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
    maxWidth: '800px',
    mb: '48px'
  },
  actionContainer: {
    display: 'flex',
    flexDirection: {
      sm: 'column',
      md: 'row'
    },
    justifyContent: 'space-between',
    alignItems: {
      md: 'center'
    },
    maxWidth: '1040px',
    mb: '20px',
    gap: '12px'
  },
  searchField: {
    minWidth: {
      xs: 'calc(100% - 109px)',
      sm: '400px'
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
    gap: '12px',
    marginLeft: 'auto',
  },
  actionButton: {
    color: '#000000CE',
    border: '1px solid #0000005A',
    backgroundColor: '#0000000D',
    svg: {
      stroke: '#000000',
    },
    '&:hover' : {
      backgroundColor: '#0000001A',
      borderColor: '#000000',
    },
    '&:disabled' : {
      color: '#0000001A',
      svg: {
        color: '#0000001A',
        stroke: '#0000001A',
      }
    }
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
  filterContainer: {
    minWidth: { xs: "40px", sm: "97px" },
    padding: { xs: 0, sm: "8px 12px" },
    "& .MuiButton-endIcon": {
      margin: { xs: 0, sm: "-4px -4px -4px 8px" },
      justifyContent: { xs: "center", sm: "flex-start" },
    },
  },
  popoverPaper: {
    width: '343px',
    borderRadius: '12px',
    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
    mt: '12px'
  },
  filterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: '16px',
  },
  filterTitle: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500
  },
  closeButton: {
    p: 0,
    color: '#6B7280'
  },
  filterContent: {
    p: '16px'
  },
  filterOption: {
    height: '40px',
    backgroundColor: '#F9FAFB',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#E5E7EB',
    }
  },
  filterOptionText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  filterArrow: {
    width: '20px',
    height: '20px',
    color: '#6B7280',
    transition: 'transform 0.2s'
  },
  filterOptionsContainer: {
    mt: '4px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
    zIndex: 1
  },
  filterOptionItem: {
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#F9FAFB'
    }
  },
  dialog: {
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
  dialogHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: '24px'
  },
  dialogTitle: {
    fontSize: {
      xs: '24px',
      sm: '32px'
    },
    lineHeight: {
      xs: '28px',
      sm: '36px'
    },
    p: 0,
    m: 0
  },
  dialogCloseButton: {
    p: 0,
    color: '#204464',
    '& .MuiSvgIcon-root': {
      width: {
        xs: '20px',
        sm: '24px'
      },
      height: {
        xs: '20px',
        sm: '24px'
      }
    }
  },
  dialogContent: {
    fontSize: {
      xs: '14px',
      sm: '18px'
    },
    lineHeight: {
      xs: '20px',
      sm: '24px'
    }
  },
  dialogActions: {
    p: 0,
    mt: '32px',
    gap: '12px'
  },
  cancelButton: {
    fontSize: '14px',
    lineHeight: '20px',
    height: '40px',
    width: '100px',
    color: '#204464',
    border: 'none',
    '&:hover': {
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
  confirmButton: {
    fontSize: '14px',
    lineHeight: '20px',
    height: '40px',
    width: '100px',
    backgroundColor: '#204464',
    '&:hover': {
      backgroundColor: '#1a3850'
    }
  },
  paginationItem: {
    margin: 0,
    borderRadius: 0,
    border: '1px solid #E5E7EB',
    borderRight: 'none',
    padding: '14px 24px',
    height: '47px',
    display: 'flex',
    alignItems: 'center',
    background: '#FFFFFF',
    '&.MuiPaginationItem-root': {
      borderRadius: 0,
      margin: 0
    },
    '&.Mui-selected': {
      background: 'rgba(32, 68, 100, 0.1)',
      border: '1px solid #204464',
      borderRight: 'none',
      color: '#000',
      '&:hover': {
        background: 'rgba(32, 68, 100, 0.1)',
      }
    },
    '&:hover': {
      background: 'rgba(32, 68, 100, 0.05)',
    },
    '&:last-child': {
      borderRight: '1px solid #E5E7EB',
      '&.Mui-selected': {
        borderRight: '1px solid #204464',
      }
    }
  },
  pagination: {
    '& .MuiPagination-ul': {
      gap: 0
    }
  },
  tabContainer: {
    width: '100%',
    maxWidth: '1040px',
    borderBottom: '1px solid #777777',
    mb: 3
  },
  tabs: {
    width: 'auto', // Changed from 100% to auto to not force full width
    minHeight: 'unset',
    '& .MuiTabs-indicator': {
      backgroundColor: 'transparent'
    },
    '& .MuiTabs-flexContainer': {
      gap: '24px', // Space between tabs
      justifyContent: 'flex-start' // Align tabs to the left
    },
    '& .MuiTab-root': {
      textTransform: 'none',
      fontSize: {sm: '14px', xs: '12px'},
      lineHeight: {sm: '20px', xs: '16px'},
      padding: {sm: '10px 20px', xs: '4px 8px'}, // 20px padding on sides
      minWidth: 'unset',
      minHeight: 'unset',
      borderBottom: '2px solid transparent',
      '&.tab-all': {
        color: '#777777',
        '&.Mui-selected': {
          borderBottom: '2px solid #777777'
        }
      },
      '&.tab-submitted': {
        color: '#058205',
        '&.Mui-selected': {
          borderBottom: '2px solid #058205'
        }
      },
      '&.tab-processing': {
        color: '#EF6C00',
        '&.Mui-selected': {
          borderBottom: '2px solid #EF6C00'
        }
      },
      '&.tab-mailed': {
        color: '#204464',
        '&.Mui-selected': {
          borderBottom: '2px solid #204464'
        }
      },
      '&.tab-cancelled': {
        color: '#F03D3E',
        '&.Mui-selected': {
          borderBottom: '2px solid #F03D3E'
        }
      }
    }
  }
}; 
