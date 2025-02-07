export const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  description: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#6B7280',
    marginTop: '16px',
    marginBottom: '26px'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    '& + &': {
      marginTop: '16px'
    }
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  stepTag: {
    backgroundColor: 'rgba(32, 68, 100, 0.1)',
    border: '1px solid #204464',
    borderRadius: '16px',
    padding: '4px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464'
  },
  stepTitle: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#111827',
    fontWeight: 500
  },
  descriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  stepDescription: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  requiredText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464'
  },
  qrContainer: {
    width: '200px',
    height: '200px',
    backgroundColor: '#F9FAFB',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '24px'
  },
  qrSection: {
    display: 'flex',
    gap: '24px',
    backgroundColor: '#F9FAFB',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px'
  },
  qrContainer: {
    width: '160px',
    height: '160px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  secretKeyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1
  },
  cantSeeText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    color: '#111827'
  },
  enterKeyText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B7280'
  },
  secretKeyBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    padding: '12px'
  },
  secretKey: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#111827',
    fontFamily: 'monospace',
    letterSpacing: '0.1em'
  },
  copyButton: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#204464',
    padding: '4px 8px',
    alignSelf: 'flex-start',
    '&:hover': {
      backgroundColor: 'rgba(32, 68, 100, 0.04)'
    }
  }
}; 