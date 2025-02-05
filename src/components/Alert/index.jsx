import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../redux/slices/alertSlice';

const Alert = () => {
  const dispatch = useDispatch();
  const { showAlert, message } = useSelector((state) => state.alert);

  if (!showAlert) return null;

  return (
    <Box
      sx={{
        width: '100%',
        height: '56px',
        backgroundColor: '#204464',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1300,
      }}
    >
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '20px',
          lineHeight: '24px',
        }}
      >
        {message}
      </Typography>
      <Button
        onClick={() => dispatch(hideAlert())}
        sx={{
          position: 'absolute',
          right: '16px',
          width: '54px',
          height: '27px',
          backgroundColor: '#E5E7EB',
          color: '#000000',
          fontSize: '12px',
          lineHeight: '14.5px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#D1D5DB',
          },
        }}
      >
        Exit
      </Button>
    </Box>
  );
};

export default Alert; 