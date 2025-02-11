export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 3
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#111827',
    mb: 0.5
  },

  description: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#6B7280',
    maxWidth: '580px'
  },

  addButton: {
    height: '40px',
    color: '#6B7280',
    border: '1px solid #E5E7EB',
    textTransform: 'none',
    fontSize: '14px',
    lineHeight: '20px',
    '&:hover': {
      border: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB'
    }
  }
}; 