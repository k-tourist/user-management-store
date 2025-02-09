import { Box, Typography, Button } from '@mui/material';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

export const DeleteConfirmationModal = ({ open, onClose }) => {
  const handleDelete = () => {
    // Handle delete logic here
    onClose();
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Delete Confirmation"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>
              Delete Multi-Factor Authentication Method
            </Typography>
            <Typography sx={styles.description}>
              Are you sure you want to delete this MFA method? This action cannot be undone.
            </Typography>
          </Box>
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleDelete} sx={styles.deleteButton}>
            Delete
          </Button>
        </>
      }
    />
  );
}; 