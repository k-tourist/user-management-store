import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const CustomDialog = ({
  open,
  onClose,
  title,
  content,
  actions,
  ...props
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: '100%',
            sm: '685px'
          },
          maxWidth: '685px',
          minHeight: '252px',
          borderRadius: '12px',
          p: { xs: 2, sm: 3 },
          m: { xs: 2, sm: 0 }
        }
      }}
      {...props}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: '24px'
      }}>
        <DialogTitle
          sx={{
            fontSize: { xs: '24px', sm: '32px' },
            lineHeight: { xs: '28px', sm: '36px' },
            p: 0,
            m: 0
          }}
        >
          {title}
        </DialogTitle>
        <IconButton
          onClick={onClose}
          sx={{
            p: 0,
            color: '#204464',
            '& .MuiSvgIcon-root': {
              width: { xs: '20px', sm: '24px' },
              height: { xs: '20px', sm: '24px' }
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: 0 }}>
        {content}
      </DialogContent>
      <DialogActions sx={{ p: 0, mt: '32px', gap: '12px' }}>
        {actions}
      </DialogActions>
    </Dialog>
  );
}; 