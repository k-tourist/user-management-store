import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { CustomDialog } from '../../../../components/dialog/CustomDialog';
import { styles } from './styles';

const CustomAuthList = ({ title, description }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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

      <CustomDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title="Setup Authenticator App"
        content={
          <Box>
            {/* Add your setup authenticator app content here */}
            <Typography>
              Setup instructions and QR code will go here...
            </Typography>
          </Box>
        }
        actions={
          <>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button variant="contained" onClick={handleCloseDialog}>
              Confirm
            </Button>
          </>
        }
      />
    </Box>
  );
};

export default CustomAuthList; 