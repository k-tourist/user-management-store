export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  contentContainer: {
    display: 'flex',
    flex: 1
  },
  mainContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '100%', md: (width) => `calc(100% - ${width}px)` }
  },
  content: {
    flexGrow: 1,
    p: { xs: 2, sm: 3 }
  }
}; 