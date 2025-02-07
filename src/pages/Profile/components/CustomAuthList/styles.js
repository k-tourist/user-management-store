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
    fontSize: '30px',
    lineHeight: '36px',
    fontWeight: 600,
    color: '#111827',
    mb: 1
  },
  description: {
    fontSize: '18px',
    lineHeight: '22px',
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