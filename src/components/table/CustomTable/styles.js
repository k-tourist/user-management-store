export const styles = {
  container: {
    maxWidth: '1040px',
    overflowX: 'auto',
    '& .MuiTable-root': {
      borderCollapse: 'separate',
      borderSpacing: 0,
      border: '1px solid #E5E7EB',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    '& .MuiTableCell-root': {
      borderBottom: '1px solid #E5E7EB',
      borderRight: 'none',
    },
    '& .MuiTableRow-root:last-child .MuiTableCell-root': {
      borderBottom: 'none',
    }
  },
  headerRow: {
    height: '48px',
    backgroundColor: '#F9FAFB',
    '& .MuiTableCell-head': {
      fontWeight: 600,
      whiteSpace: 'nowrap',
      padding: '0',
      backgroundColor: '#F9FAFB',
    }
  },
  bodyRow: {
    height: '63px',
    cursor: 'pointer',
    '& .MuiTableCell-body': {
      // padding: '0 12px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '12px',
      lineHeight: '14.5px'
    },
    '&:hover': {
      backgroundColor: '#F9FAFB',
    }
  }
}; 