import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../redux/slices/alertSlice';
import { styles } from './styles';

const Alert = () => {
  const dispatch = useDispatch();
  const { showAlert, message } = useSelector((state) => state.alert);

  if (!showAlert) return null;

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.message}>
        {message}
      </Typography>
      <Button
        onClick={() => dispatch(hideAlert())}
        sx={styles.exitButton}
      >
        Exit
      </Button>
    </Box>
  );
};

export default Alert; 