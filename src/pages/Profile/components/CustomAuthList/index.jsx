import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { AddAppVerificationModal } from '../modals/AddAppVerificationModal';
import { AddEmailVerificationModal } from '../modals/AddEmailVerificationModal';
import { AddPhoneVerificationModal } from '../modals/AddPhoneVerificationModal';
import { styles } from './styles';

const CustomAuthList = ({ title, description, type, openDialog, handleCloseDialog }) => {

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
      </Box>

      {renderModal()}
    </Box>
  );
};

export default CustomAuthList; 