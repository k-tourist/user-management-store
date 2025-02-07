import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';

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
        sx: styles.paper
      }}
      {...props}
    >
      <Box sx={styles.header}>
        <DialogTitle sx={styles.title}>
          {title}
        </DialogTitle>
        <IconButton
          onClick={onClose}
          sx={styles.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={styles.content}>
        {content}
      </DialogContent>
      <DialogActions sx={styles.actions}>
        {actions}
      </DialogActions>
    </Dialog>
  );
}; 