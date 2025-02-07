import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { AddAppVerificationModal } from '../modals/AddAppVerificationModal';
import { AddEmailVerificationModal } from '../modals/AddEmailVerificationModal';
import { AddPhoneVerificationModal } from '../modals/AddPhoneVerificationModal';
import { styles } from './styles';

const CustomAuthList = ({ title, description, type }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const renderModal = () => {
    switch (type) {
      case 'app':
        return <AddAppVerificationModal open={openDialog} onClose={handleCloseDialog} />;
      case 'email':
        return <AddEmailVerificationModal open={openDialog} onClose={handleCloseDialog} />;
      case 'phone':
        return <AddPhoneVerificationModal open={openDialog} onClose={handleCloseDialog} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box sx={styles.container}>
        <Box sx={styles.titleBox}>
          <Typography sx={styles.title}>
            {title}
          </Typography>
          <Typography sx={styles.description}>
            {description}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={styles.addButton}
          onClick={handleOpenDialog}
        >
          Add
        </Button>
      </Box>

      {renderModal()}
    </Box>
  );
};

export default CustomAuthList; 